#!/bin/bash 

# Shell script to pseudo-clone docuemntation repos

SOURCE=source
TMPREPO_PATH=tmprepo
TARGET=$1

# List of repo properties

case "$TARGET" in
  "all")
    declare -a SOURCE_REPOS=(
      "leap-mkdocs%git@git.cwp.pnp-hcl.com:CWPdoc/leap-mkdocs.git%9.3.11%leap-docs"
    #  "volt-mx-docs%git@github01.hclpnp.com/phoenix-temenos/volt-mx-doc-opnsrc.git%source%volt-mx-docs"
      "volt-mx-docs%https://github.com/HCL-TECH-SOFTWARE/volt-mx-docs.git%source%volt-mx-docs"
      "dx-compose-docs$git@git.cwp.pnp-hcl.com:CWPdoc/dx-compose-mkdocs.git$docs$dx-compose-docs",
      "dx-docs$git@git.cwp.pnp-hcl.com:CWPdoc/dx-mkdocs.git$docs$dx-docs"
)
;;
  "leap")
      declare -a SOURCE_REPOS=(
        "leap-mkdocs%git@git.cwp.pnp-hcl.com:CWPdoc/leap-mkdocs.git%9.3.11%leap-docs"
  )
  ;;
  "volt")
      declare -a SOURCE_REPOS=(
        "volt-mx-docs%https://github.com/HCL-TECH-SOFTWARE/volt-mx-docs.git%source%volt-docs"
  )
  ;;
  "dx-compose")
      declare -a SOURCE_REPOS=(
        "dx-compose-docs%git@git.cwp.pnp-hcl.com:CWPdoc/dx-compose-mkdocs.git%docs%dx-compose-docs"
      )
  ;;
  "dx")
      declare -a SOURCE_REPOS=(
        "dx-docs%git@git.cwp.pnp-hcl.com:CWPdoc/dx-mkdocs.git%docs%dx-docs"
      )
  ;;
esac

printf "\nBegin pseudo-cloning %s documentation sources." "${#SOURCE_REPOS[@]}"
for REPO_ENTRY in "${SOURCE_REPOS[@]}"
do
  # Process each entry in SOURCE_REPOS list
  REPO_NAME=$(echo $REPO_ENTRY | cut -d'%' -f1)
  REPO_URL=$(echo $REPO_ENTRY | cut -d'%' -f2)
  SUBDIR_PATH=$(echo $REPO_ENTRY | cut -d'%' -f3)
  DEST_PATH=$(echo $REPO_ENTRY | cut -d'%' -f4)
	printf "\n\nCloning $REPO_NAME from $REPO_URL\n"
  git clone $REPO_URL ./$TMPREPO_PATH
  mkdir -p $SOURCE/$DEST_PATH  
	cp -r $TMPREPO_PATH/$SUBDIR_PATH/* $SOURCE/$DEST_PATH
	rm -rf $TMPREPO_PATH
done

printf "\n\nDocumentation sources pseudo-cloned successfully.\n\n"