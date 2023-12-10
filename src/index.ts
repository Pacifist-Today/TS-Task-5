//Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

class CalculateArea {
    private _name: string
    private _color: string
    private _formula?: string

    protected constructor() {}

    protected get name (): string {
        return this._name
    }

    protected set name (figureName: string) {
        this._name = figureName
    }

    protected get color (): string {
        return this._color
    }

    protected set color (figureColor: string) {
        this._color = figureColor
    }

    protected get formula (): string | void {
        return this._formula
    }

    protected set formula (square: string) {
        this._formula = square
    }


}

class Triangle extends CalculateArea {
    constructor() {
        super();
        super.name = 'triangle'
        super.color = 'red'
    }
}

class Circle extends CalculateArea {
    constructor() {
        super();
        super.name = 'circle'
        super.color = 'green'
    }
}

class Rectangle extends CalculateArea {
    constructor() {
        super()
        super.name = 'rectangle'
        super.color = 'blue'
        super.formula = 'l * w'
    }
}

class Square extends CalculateArea {
    constructor() {
        super()
        super.name = 'square'
        super.color = 'orange'
        super.formula = 'a^2'
    }
}

const triangle = new Triangle()
const circle = new Circle()
const rectangle = new Rectangle()
const square = new Square()