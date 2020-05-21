import React, { Component } from "react";
import styles from "./productsOverview.module.scss";
import products from "../../services/products-data";
import Card from "../card/card";

class ProductsOverview extends Component{
    state={
        products,
        items:[]
    }

    addToCart=(item)=>{
        let items=[...this.state.items]
        items.push(item);
        this.setState({
            items:items
        },console.log(this.state));        
        }
    render(){
        const start=this.props.range[0]
        const end= this.props.range[1]
        return(
            <React.Fragment>
                <div style={{backgroundColor:`${this.props.grey ? "var(--light-grey-color)":null}`,margin:"auto",width:"100%"}} >
            <div className={styles.productsOverview}>
                <div className={styles.description}>
                    <h3>{this.props.header}</h3>
                    <span>{this.props.sub}</span>
                </div>
                <div className={styles.productsCategories}>
                    <ul>
                        <li >All</li>
                        <li className={styles.active}>Super Market</li>
                        <li>BabyWorld</li>
                        <li>TV</li>
                        <li>Smart Phones</li>
                    </ul>
                </div>
               
               
            </div>
             <div className={styles.products}>
                     {this.state.products.all.slice(start,end).map(product=>(
                    <Card
                    addItem={()=>this.props.addItem(product)}
                    item={product}
                    key={product.id}
                     newPrice={product.newPrice}
                     oldPrice={product.oldPrice}
                     img={product.img}
                     title={product.title}/>
                ))}
                </div>
                </div>
           </React.Fragment>
        )
    }
}

export default ProductsOverview