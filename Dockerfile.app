FROM amazonlinux:2
RUN yum update -y && yum -y install shadow-utils.x86_64 xmlstarlet saxon augeas bsdtar unzip && yum clean all
RUN yum install -y sudo amazon-linux-extras gcc-c++ make tar util-linux 
RUN curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash - 
RUN yum install -y nodejs   
RUN echo node -v
RUN mkdir -p /app
COPY . /app
RUN groupadd workabus
RUN useradd workabus -g workabus
RUN chown -R workabus:workabus /app
RUN npm install -g yarn
USER workabus
WORKDIR /app
# CMD [ "yarn" ]