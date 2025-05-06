default:
	just -l

build:
	bun run quartz build

serve:
	bun run quartz build --serve
