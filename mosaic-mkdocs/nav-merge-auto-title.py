import yaml
from pathlib import Path

# ---------------- CONFIG ----------------

ROOT_DIR = Path(".")
DOCS_DIR = Path("source")
ROOT_MKDOCS = ROOT_DIR / "mkdocs.yml"

PRODUCTS = [
    {
        "folder": "mosaic-docs",
        "label": "HCL Mosaic",
        "type": "explicit",
    },
    {
        "folder": "leap-docs",
        "label": "Leap Docs",
        "type": "explicit",
    },
    {
        "folder": "voltmx-docs",
        "label": "VoltMX Docs",
        "type": "explicit",
    },
    {
        "folder": "dx-docs",
        "label": "DX Docs",
        "type": "awesome-pages",
    },
]

# ---------------------------------------


def prefix_nav_paths(nav, prefix, parent_title=None):
    """
    Recursively prefix all markdown paths in a nav structure
    with the product folder. Auto-titles unnamed items using parent title.
    
    Args:
        nav: Navigation structure (list)
        prefix: Path prefix (e.g., 'leap-docs')
        parent_title: Title of parent section (for auto-titling first unnamed item)
    """
    rewritten = []

    for idx, item in enumerate(nav):
        if isinstance(item, dict):
            for title, value in item.items():
                if isinstance(value, str):
                    # Simple page reference
                    rewritten.append({title: f"{prefix}/{value}"})
                elif isinstance(value, list):
                    # Section with subitems - pass title as parent_title
                    rewritten.append({title: prefix_nav_paths(value, prefix, parent_title=title)})
        elif isinstance(item, str):
            # Unnamed item (just a string path)
            # If it's the first item and we have a parent title, reuse it
            if idx == 0 and parent_title and item.endswith('.md'):
                rewritten.append({parent_title: f"{prefix}/{item}"})
            else:
                # Otherwise just prefix the path
                rewritten.append(f"{prefix}/{item}")
        else:
            rewritten.append(item)

    return rewritten


def load_yaml(path):
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def save_yaml(path, data):
    with open(path, "w", encoding="utf-8") as f:
        yaml.dump(data, f, sort_keys=False, allow_unicode=True)


# ---------------- MERGE NAV ----------------

if not ROOT_MKDOCS.exists():
    raise FileNotFoundError("Root mkdocs.yml not found")

merged_nav = []

for product in PRODUCTS:
    folder = product["folder"]
    label = product["label"]
    product_type = product["type"]

    product_dir = DOCS_DIR / folder
    product_mkdocs = product_dir / "mkdocs.yml"

    # Awesome Pages product → placeholder only
    if product_type == "awesome-pages":
        merged_nav.append({label: f"{folder}/"})
        continue

    # Explicit-nav product
    if not product_mkdocs.exists():
        print(f"WARNING: {product_mkdocs} not found, skipping")
        continue

    product_cfg = load_yaml(product_mkdocs)
    product_nav = product_cfg.get("nav")

    if not product_nav:
        print(f"WARNING: No nav found in {product_mkdocs}, skipping")
        continue

    prefixed_nav = prefix_nav_paths(product_nav, folder)
    merged_nav.append({label: prefixed_nav})


# ---------------- UPDATE ROOT MKDOCS ----------------

root_cfg = load_yaml(ROOT_MKDOCS)

# Ensure docs_dir is correct
root_cfg["docs_dir"] = "source"

# Replace nav completely
root_cfg["nav"] = merged_nav

save_yaml(ROOT_MKDOCS, root_cfg)

print("✓ Navigation merged successfully into root mkdocs.yml")
print("✓ Unnamed first items auto-titled with parent section name")
