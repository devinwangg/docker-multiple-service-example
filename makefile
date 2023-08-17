DOCKER_COMPOSE=docker-compose

.PHONY : all

run:
	${DOCKER_COMPOSE} up --no-deps --build ${SVC_NAME}