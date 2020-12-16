import React from 'react'
import Data from '../Data/data.js'


class Algorithms extends React.Component {
    state={
        data:Data,
        array: [],
        nestedArr: [],
        object: {},
        nestedObj: {},
        musicArr: []
    }



    componentDidMount = () => {
        let data = this.state.data
        for(let i=0;i<data.length;i++){
            this.setState({
                array: data[0],
                nestedArr: data[1],
                object: data[2],
                nestedObj: data[3],
                musicArr: data[4],
                arrItem:"",
                newArr: []
            })
        }
    }

    handleClick = () => {
        console.log("")
    }

    findSmallest = (array) => {
        let arr = array
        let sml = arr[0].length
        let sml_ind = 0
        for(let i=0; i < arr.length; i++){
           if(arr[i].length < sml){
               sml = arr[i].length
               sml_ind = i
           } 
        }
        this.setState({
            arrItem: arr[sml_ind]
        })
    }

    sortArray = (arr) => {
        console.log('here')
        let newArr2 = []
        for(let i=0; i<arr.length; i++){
            let smallest = this.findSmallest(arr)
            newArr2.push(arr.pop(smallest))
        }
        this.setState({
            newArr: newArr2
        })
    }



    handleSort = () => {
        console.log(this.state.array)
        console.log(this.state.nestedArr)
        console.log(this.state.object)
        console.log(this.state.nestedObj) 
    }
    
    selectionSort = () => {
        console.log(this.state.array)
        console.log(this.state.nestedArr)
        console.log(this.state.object)
        console.log(this.state.nestedObj) 
        
    }



    render(){
        return(
            <div>
                <h1>Practice</h1>
                <button onClick={this.handleClick}>click me</button>
                <div className="array">
                    <h2>Array Data</h2>
                </div>
                <div className="nestedArray">
                    <h2>Nested Array Data</h2>
                    <button onClick={() =>this.findSmallest(this.state.nestedArr)}>Find Smallest</button>
                    <h3>{this.state.arrItem}</h3>
                    <h2>Sorted Array</h2>
                    <button onClick={() => this.sortArray(this.state.nestedArr)}>Sort Array</button>
                    {this.state.nestedArr.map(item => {
                        return (<h3 key={item}>{item}</h3>)
                    })}
                </div>
                <div className="object">
                    <h2>Object Data</h2>
                </div>
                <div className="nestedObj">
                    <h2>Nested Object Data</h2>
                </div>
            </div>
        )
    }
}

export default Algorithms;