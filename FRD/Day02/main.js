let appContainer = document.getElementById('app')

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todolist: [],
            inputs: {
                job: ""
            }
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleTodoClick = this.handleTodoClick.bind(this)
    }

    handleInputChange(e) {
        let name = e.target.name
        let value = e.target.value
        this.setState(val => {
            val.inputs[name] = value
            return val
        })
    }

    handleAdd(e) {
        e.preventDefault()

        this.setState(val => {
            if (val.inputs.job == "") {
                return val
            }
            val.todolist.push({ name: val.inputs.job, isCompeted: false })
            val.inputs.job = ""
            return val
        })
    }

    handleTodoClick(index) {
        return () => {
            this.setState(val => {
                if (!val.todolist[index]) {
                    return val
                }
                val.todolist[index].isCompeted = !val.todolist[index].isCompeted
                return val
            })
        }
    }

    handleTodoRemove(index) {
        return () => {
            this.setState(val => {
                val.todolist = val.todolist.filter((item, i) => i != index)
                return val
            })
        }
    }

    render() {
        return (
            <div className="w-75 mw-100 m-auto mt-3 ">
                <form className="row justify-content-between mb-3" onSubmit={this.handleAdd}>
                    <div className="col-10">
                        <input value={this.state.inputs.job} onChange={this.handleInputChange} name="job" type="text" className="form-control" placeholder="To do" ></input>
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-primary w-100 h-100">+</button>
                    </div>
                </form>
                {this.state.todolist.map((item, index) => {
                    return (
                        <TodoComponent key={index} data={item} handleRemove={this.handleTodoRemove(index)} handleClick={this.handleTodoClick(index)}></TodoComponent>
                    )
                })}
            </div>

        )
    }
}


class TodoComponent extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div onClick={this.props.handleClick} className={`alert alert-${this.props.data.isCompeted ? "success" : "primary"} alert-dismissible`}>
                <span>{this.props.data.name}</span>
                <button onClick={this.props.handleRemove} type="button" className="btn-close" aria-label="Close"></button>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>
    , appContainer)