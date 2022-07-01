let appContainer = document.getElementById('app')

class HelloComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} !! </h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

function PragraphComponent() {
    return (<p>"I wanna to be a developer"</p>)
}

class CounterComponent extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
        this.increaserCounter = this.increaserCounter.bind(this)
    }

    increaserCounter() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((prev, props) => {
            return {
                count: prev.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.count > 0 ? (
                        <h1>You clicked {this.state.count} times</h1>
                    ) : (
                        <h1>You have'nt clicked yet</h1>
                    )
                }
                <button onClick={this.increaserCounter}>Click me!</button>
            </div>
        )
    }
}

class ListUser extends React.Component {
    render() {
        return <div>
            <h1>My user list</h1>
            {
                this.props.list ? (
                    this.props.list.map(name => <p key={name}>{name}</p>)
                ) : (
                    <p>There is no user</p>
                )
            }
        </div >
    }
}

class Selector extends React.Component {
    constructor() {
        super()
        this.state = { currnentItem: "" }
        this.setCurrentItem = this.setCurrentItem.bind(this)
    }

    setCurrentItem(e) {
        let selected = e.target.value
        this.setState(val => {
            val.currnentItem = selected
            return val
        })
    }

    render() {
        return (
            <div>
                <select onChange={this.setCurrentItem}>
                    {this.props.items ? (
                        this.props.items.map(item => <option key={item}>{item}</option>)
                    ) : (
                        <></>
                    )}
                </select>
                <p>You selected: {this.state.currnentItem}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Selector items={["Toyota", "Masda", "Huydai"]} />
    </div>
    , appContainer)