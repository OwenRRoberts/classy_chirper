import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <form className="from-group">
                            <label>Task:</label>
                            <input 
                            value={this.state.task} 
                            onChange={e => this.setState({ task:e.target.value })}
                            className="form-control"
                            />
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;