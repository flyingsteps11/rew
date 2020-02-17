import React from 'react';
import CustomTable from "../components/CustomTable";
import ordersColumns from "../constants/ordersColumns";
import {ORDERS} from "../router/link";
import {Button,Grid} from "semantic-ui-react";

class OrderContainer extends React.Component{
   onclickRow=(ID)=>{
       const {history} = this.props;
       //history.push(ORDER.replace(':id',ID))
   };
   render(){
       return(
           <>
           <label>Заказы</label>
               <CustomTable columns={ordersColumns} rows={} onclickRow={this.onclickRow}/>
           </>
       )
   }
}
export default OrderContainer