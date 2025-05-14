const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 3.2
const num: number = 3e10

const message: string = 'Hello typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'World']

const contact: [string, number, boolean] = ['Danik', 1245125, true]


let variable: any = 42
//..
variable = 'New string'
variable = []

//===

function sayMyName(name: string): void{
    console.log(name)
}
sayMyName('Heisenberg')


// Never

function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while(true){

    }
}

// Type

type Login = string
const login: Login = 'admin'
//const login2: Login = 2 --> ERROR, cuz 2 is int

type ID = string | number
const id1: ID = 1234
const id2: ID = 'gsae'
//const id3: ID = true ERROR

type SomeType = string | null | undefined
