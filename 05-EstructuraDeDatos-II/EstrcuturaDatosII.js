/*LISTAS ENLAZADAS SIMPLE

Son estructura de datos donde sus elementos o nodos estan unidos entre si. Cada nodo o elemento tiene dos partes, la data o informacion que quiero almacenar y 
un next, que indica cual es el proximo elemento.

La lista va a estar representada por un unico (head) que va a ser la cabeza o primer elemento de la lista. Ese primer elemento, como se mencionó antes, tiene un next que le indica
cuál es el siguiente elemento, y ese elemento, a su vez, sabe cuál es el siguiente, y asi sucesivamente, sin embargo, los elemento no tienen acceso a la data del elemento siguiente, solo 
a la suya. Por tanto el alcance de un elemento es de solo un nodo hacia adelante, no puede saber cuál es el elemento anterior, tampoco puede saber cuál es el elemento que está
tres nodos adelante de el, su alcance es de solo un nodo.

Cada elemento tiene un espacio en la memoria, y no necesariamente deben estar continuos, para que un elemento sepa cual es el elemento siguiente, debe acceder a la posicion en memoria donde 
ese elemento esta ubicado, 

Para recorrer una lista, debo iniciar por el primer elemento e ir avanzando nodo por nodo, cuando un elemento de que su next es null, significa que ese es el ultimo elemento.

JS no cuenta con la estructura de lista, nosotros tenemos que armarla, cada nodo sera un objeto con dos propiedades (data,next), por tanto, tendremos varios objetos similares, por tanto,
crearemos una funcion constructora llamada Nodo que tenga esas dos propiedades. Por otro lado, la lista tambien sera un objeto con una propiedad, que es el head, usaremos la funcion constructora
para poder crear varias listas parecidas si queremos.

   HEAD
POS: 56TB             POS: 76GS              POS: 01UJ
Element 1    --->     Element 2    --->      Element 3
data: 'Hola '         data:'soy '            data: 'Diana.'
next: 76GS            next: 01UJ             next: null


NODO:
data: La información que alojamos en el elemento
next: Va a describir la posicion de memoria del proximo elemento de la lista


LISTA:
head: Representa la dirección de memoria del primer elemento de la lista, es decir, es un nodo.
*/

function LinkedList(){          // Creo la lista, que inicialmente estará vacía
    this.head=null
}

function Node(data){            //Creo el nodo y le asigno el valor que debe tener (data). En este punto el nodo no apunta a nadie, por tanto, next es null.
    this.data=data
    this.next=null
}


LinkedList.prototype.add = function(data){  // Con esto voy a crear un metodo nuevo en el prototipo de mi funcion construtora LinkedList 
    let newnode = new Node(data); // El nuevo metodo me va a crear un nuevo nodo
    this.head = newnode // El nuevo nodo será el head de mi lista (primer elemento)
}

//Si creo una nueva Lista, pasará esto:

var Lista = new LinkedList()   
console.log(Lista)   // la lista inicialmente esta vacia head=null


//Si agrego un nuevo elemento cuyo valor es 5, entonces hago:

Lista.add(5)

console.log(Lista)    // se agrega un elemento que ahora sera mi head, cuyo valor es 5 y el next es null

/* Si yo vuelvo a agregar un valor por medio del metodo add, en lugar de insertarlo al final de la lista, me va a reemplazar el valor del head.
Para que esto no suceda, debemos crear una variable que sirva como apuntador auxiliar y lo haremos igual al head. 
*/

//          var current = this.head

/*Si adelante de current hay algo, es decir si el head.next es diferente de null, hago que current sea igual al elemento siguiente y tambien lo evalue,asi sucesivamente hasta 
que llegue al ultimo nodo (aquel cuyo next = null)*/

//          if (current.next !== null) current = current.next;

// si current es igual null, significa que llegue al ultimo elemento, asi que hago current igual newNodo, es decir el nodo que creo se asigna al ultimo elemento de la lista.

//          current.next=newNode

// Por tanto, el metodo add quedaria redefinida de la siguiente manera:

LinkedList.prototype.add = function(data){  // Con esto voy a crear un metodo nuevo en el prototipo de mi funcion construtora LinkedList 
    let newnode = new Node(data); // El nuevo metodo me va a crear un nuevo nodo
    var current = this.head   //Creo un apuntador axiliar que apunte al head de mi lista (primer elemento)
     if (!current) { // Con esto digo que no hay un current.next o que este es null..
        this.head=newnode;  //Si el next de current que es mi primer elemento es null, significa que la lista esta vacia, por tanto el nuevo nodo sera el primer elemento
        return data
     }
     while (current.next){ // Con esto digo que si hay un current.next, es decir que hay una valor, por tanto, significa que no estoy en el final de la lista y tengo que buscarla, para eso uso el while
                                    // mientras que el next de current tenga algo o sea diferente de null, debo hacer a current, el elemento siguiente y asi hasta que llegue al ultimo.
        current=current.next
     }
     current.next=newnode
     return data
}


Lista.add(5)
Lista.add(6)

console.log(Lista)

Lista.add(6)
console.log(Lista)
