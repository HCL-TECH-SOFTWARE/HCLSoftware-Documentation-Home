# Makefile for HCL mosaic documentation build

SOURCE = source
TMPREPO_PATH = tmprepo

clean-source:
	@echo "\nCleaning all source docs from :"
	rm -rf $(SOURCE)/*
	@echo "\n"

#clone-source-docs: clone-leap clone-volt clone-dx-compose clone-dx
clone-all: 
	./clone-sources.sh all

clone-leap:
	./clone-sources.sh leap

clone-volt:
	./clone-sources.sh volt

clone-dx-compose:
	./clone-sources.sh dx-compose

clone-dx:
	./clone-sources.sh dx

build-mosaic:
	mkdocs serve -f mkdocs-mosaic.yaml
