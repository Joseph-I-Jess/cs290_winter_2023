# inspired by: https://docs.docker.com/compose/gettingstarted/
# and: https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository
FROM ubuntu:20.04
WORKDIR /swarm

# update and get installs prepped for Docker
RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
# fetch GPG key for Docker
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# setup for stable repo access
RUN echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
# finally install docker engine stuff
RUN apt-get install -y \
    docker.io
# and add openssh client for manager to manage workers when in swarm mode
RUN apt-get install -y openssh-client
# finally clean up apt lists
RUN rm -rf /var/lib/apt/lists/*

# CMD service docker-engine start && docker run hello-world
# service failed to start, would not run dockerd, but we can borrow our host machine's docker service like this:
#   docker run -v "//var/run/docker.sock:/var/run/docker.sock" ubuntu-docker-quick-test /bin/sh -c "docker run hello-world"