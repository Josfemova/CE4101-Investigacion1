---
title: Instituto Tecnológico de Costa Rica\endgraf\bigskip \endgraf\bigskip\bigskip\
 Investigación 1 \endgraf\bigskip\bigskip\bigskip\bigskip
author: 
- José Morales Vargas, carné 2019024270
- Alejandro Soto Chacón, carné 2019008164
date: \bigskip\bigskip\bigskip\bigskip Area Académica de\endgraf Ingeniería en Computadores \endgraf\bigskip\bigskip\ Especificación y Diseño \endgraf de Software (CE4101) \endgraf\bigskip\bigskip Profesor Daniel Madriz Huertas \endgraf\vfill  Semestre I
header-includes:
- \setlength\parindent{24pt}
- \usepackage{url}
lang: es-ES
papersize: letter
classoption: fleqn
geometry: margin=1in
#fontfamily: sans
fontsize: 12pt
monofont: "Noto Sans Mono"
linestretch: 1.15
bibliography: bibliografia.bib
csl: ieee.csl
nocite: |
    @perror 
...

\maketitle
\thispagestyle{empty}
\clearpage
\tableofcontents
\pagenumbering{roman}
\clearpage
\pagenumbering{arabic}
\setcounter{page}{1}

# Unit testing

## ¿Qué son las pruebas unitarias

La práctica de pruebas unitarias consiste en la prueba de unidades individuales
de software. Se usa el término unidad puesto que el objeto de prueba puede
variar desde unidades simples de funcionamiento a unidades más complejas, es 
decir, desde funciones hasta procedimientos que involucran varias unidades.

Este tipo de pruebas se realizan previo a otros tipos de pruebas para 
asegurarse de una correta funcionalidad del código respecto a la funcionalidad
especificada. Su resultado, segun [@agile-alliance-unit-test], es binario: la 
unidad pasa la prueba si la misma cumple con la funcionalidad especificada, o 
falla la prueba si no cumple con las expectativas. 

Las pruebas unitarias purden ser una base para metodologías de desarrollo y 
diseño, por ejemplo, lo que [@agile-alliance-tdd] llama "Test driven 
divelopment". Este es un acercamiento en el que se busca describir el como
funciona un programa por medio de pruebas unitarias antes de empezar a producir
el código del programa mismo. Esto impone un coste de tiempo inicial para la
definición y programación de las pruebas unitarias, sin embargo, su coste
inicial puede significar un ahorro de tiempo en la fase final de proyectos 
complejos. 

Las pruebas unitarias son un subset de el conjunto de pruebas de software en 
general. Lo anterior significa que varias de las categorías de clasificación
de pruebas se pueden encontrar en las pruebas unitarias, por ejemplo, las
referentes a _white box_ testing, _black box_ testing y _grey box_ testing, las
cuales se refieren al nivel de conocimiento sobre el funcionamiento interno de
la unidad bajo prueba. 

### Beneficios

Los beneficios son varios, por ejemplo, [@agile-alliance-tdd] y 
[@agile-alliance-unit-test] indican entre los beneficios:

- Disminución en la cantidad de defectos encontrados a costo de un mayor
  esfuerzo de desarrollo en las etapas iniciales.
- Disminución en el esfuerzo requerido en las etapas finales de desarrollo.
- Mejor calidad de diseño del código. 

Otras fuentes como [@geeks-for-geeks] señalan las siguientes ventajas:

- Permiten obtener un entendimiento de la funcionalidad provista por una API
  y su comportamiento esperado. 
- Permiten probar secciones de un programa sin necesidad de que el mismo ya se
  encuentre completado.


### Limitaciones

Las pruebas unitarias, sin bien son una herramienta poderosa, no deberían 
tomarse como la única herramienta a utilizar para verificar la funcionalidad
de un programa. Otros tipos de pruebas deben realizarse posteriormente, por 
ejemplo, las pruebas de integración. Otras desventajas, limitaciones y posibles
problemas son mencionados por [@geeks-for-geeks] y [@agile-alliance-tdd]:

- El proceso consume tiempo en la escritura de las pruebas.
- Si la especificación de la funcionalidad cambia, se debe refactorizar tanto
  la unidad bajo prueba como la prueba en sí, lo que implica mayor consumo de
  tiempo
- No puede cubrir los requisitos no funcionales del programa, tal como la 
  capacidad de escalar del sistema, su desempeño, etc.


## Ejemplo framework para pruebas unitarias en Java

### Funcionalidades

### Tipos de pruebas

### Ejemplo de uso

## Ejemplo framework para pruebas unitarias en JavaScript

### Funcionalidades

### Tipos de pruebas

### Ejemplo de uso

## Conclusiones

## Bibliografía

::: {#refs}
:::

