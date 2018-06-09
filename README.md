# AmpereWeb

[![Build Status](https://travis-ci.com/vandersozc/AmpereWeb.svg?branch=master)](https://travis-ci.com/vandersozc/AmpereWeb)

[[https://sonarcloud.io/dashboard/index/com.vandersoncamp%3Aampereweb][file:https://sonarcloud.io/api/badges/measure?key=com.vandersoncamp%3Aampereweb&metric=coverage#.svg]]

[![SonarQube Coverage](https://sonarcloud.io/api/badges/measure?id=com.vandersoncamp%3Aampereweb&metric=coverage#.svg)](https://sonarcloud.io/dashboard?id=com.vandersoncamp%3Aampereweb)



<!--
https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=lines#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=bugs#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=new_bugs#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=vulnerabilities#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=new_vulnerabilities#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=code_smells#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=new_code_smells#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=coverage#.svg https://sonarcloud.io/api/badges/measure?key=no.priv.bang.ukelonn%3Aparent&metric=new_coverage#.svg-->


## Projeto

Serviço de cálculos elétricos.


## Instalação

- Build e dependências: [Maven](https://maven.apache.org/).
- Stack: [WildFly Swarm](http://wildfly-swarm.io/).

```
mvn clean wildfly-swarm:run
```

## Testes e Cobertura

Testes e cobertura: [JUnit 5](https://junit.org/junit5/).
```
mvn clean test
```

## Build e Análise
- Build remoto: [Travis CI](https://travis-ci.com/vandersozc/AmpereWeb).
- Qualidade de código: [SonarCLoud](https://sonarcloud.io/dashboard?id=com.vandersoncamp%3Aampereweb).