# Makefile

.PHONY: dev

dev:
	cd client && bun run dev

serve:
	cd server && go run main.go