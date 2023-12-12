//Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

class Circle {
    private _name: string
    private _color: string
    private _radius: number
    private _area: number

    constructor (name: string, color: string, radius: number) {
        this._name = name
        this._color = color
        this._radius = radius
    }

    calculateArea (): number {
        this._area = Math.PI * Math.pow(this._radius, 2)
        return this._area
    }
}

class Rectangle {
    private _name: string
    private _color: string
    private _length: number
    private _width: number
    private _area: number

    constructor (name: string, color: string, length: number, width: number) {
        this._name = name
        this._color = color
        this._length = length
        this._width = width
    }

    calculateArea (): number {
        this._area = this._length * this._width
        return this._area
    }

    print (): string {
        return `S = length * width = ${this._length} * ${this._width}`
    }
}

class Square {
    private _name: string
    private _color: string
    private _side: number
    private _area: number

    constructor (name: string, color: string, length: number, side: number) {
        this._name = name
        this._color = color
        this._side
    }

    calculateArea (): number {
        this._area = Math.pow(this._side, 2)
        return this._area
    }

    print (): string {
        return `S = side^2 = ${Math.pow(this._side, 2)}`
    }
}

class Triangle {
    private _name: string
    private _color: string
    private _base: number
    private _height: number
    private _area: number

    constructor (name: string, color: string, base: number, height: number) {
        this._name = name
        this._color = color
        this._base = base
        this._height = height
    }

    calculateArea (): number {
        this._area = (this._height * this._base) / 2
        return this._area
    }
}

































// class CalculateArea {
//     private _name: string
//     private _color: string
//     private _formula?: string
//
//     protected constructor() {}
//
//     protected get name (): string {
//         return this._name
//     }
//
//     protected set name (figureName: string) {
//         this._name = figureName
//     }
//
//     protected get color (): string {
//         return this._color
//     }
//
//     protected set color (figureColor: string) {
//         this._color = figureColor
//     }
//
//     protected get formula (): string | void {
//         return this._formula
//     }
//
//     protected set formula (square: string) {
//         this._formula = square
//     }
//
//
// }
//
// class Print extends CalculateArea{
//
// }
//
// class Triangle extends CalculateArea {
//     constructor() {
//         super();
//         super.name = 'triangle'
//         super.color = 'red'
//     }
// }
//
// class Circle extends CalculateArea {
//     constructor() {
//         super();
//         super.name = 'circle'
//         super.color = 'green'
//     }
// }
//
// class Rectangle extends CalculateArea implements Print{
//     constructor() {
//         super()
//         super.name = 'rectangle'
//         super.color = 'blue'
//         super.formula = 'l * w'
//     }
// }
//
// class Square extends CalculateArea {
//     constructor() {
//         super()
//         super.name = 'square'
//         super.color = 'orange'
//         super.formula = 'a^2'
//     }
// }
//
// const triangle = new Triangle()
// const circle = new Circle()
// const rectangle = new Rectangle()
// const square = new Square()