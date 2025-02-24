import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import { FormControl } from "react-bootstrap";

const anno_col = (handler) => [
    {
        dataField: "frame_num",
        text: "Frame",
        headerStyle: () => { return { width: "40px", left: 0 }; }
    },{
        dataField: "anno_count",
        text: "Count",
        headerStyle: () => { return { width: "40px", left: 0 }; }
    },{
        dataField: "local_ids",
        text: "Local ID",
        headerStyle: () => { return { width: "40px", left: 0 }; }
    },{
        dataField: "global_ids",
        text: "Global ID",
        headerStyle: () => { return { width: "40px", left: 0 }; }
    },{
        dataField: "swap",
        text: "Swap",
        editable: false,
        headerStyle: () => { return { width: "50px", left: 0}; },
        formatter: (cellContent, row) => {
          return (
            <Button
                className="btn btn-confirm btn-xs"
                label="Del"
                onClick={() => {handler(row.frame_num)}}
            >
                Skip
            </Button>
          );
        },
      }
]

function getAnnotationTableCount(annotation_data) {
    var data = []
    for(var i = 0; i < annotation_data.length; i++){
        if(annotation_data[i].length !== 0){
            var txt_id = ""
            var txt_global = ""
            for(var j = 0; j < annotation_data[i].length; j++){
                txt_id += (annotation_data[i][j]['id']) + ', '
                txt_global += (annotation_data[i][j]['global_id']) + ', '
            }
            data.push({frame_num: i, anno_count: annotation_data[i].length, local_ids: txt_id, global_ids: txt_global})
        }
    }
    return data
}


export default function AnnotationTable(props){
    const expandRow = {
        onlyOneExpanding: true,
        renderer: (row, rowIndex) => (
          <div>
            <FormControl 
                as="textarea" aria-label="With textarea" 
                defaultValue={props.annotation_data[props.currentFrame][rowIndex]['notes']} 
                onChange={(event)=> {handleOnChange(event, rowIndex)}}
                onClick={(event) => {props.toggleKeyCheck(false)}} 
                onBlur={(event) => {props.toggleKeyCheck(true)}}
            />
          </div>
        )
    };

    const handleOnChange = (event, rowIndex) => {
        console.log(props.annotation_data[props.currentFrame]);
        props.annotation_data[props.currentFrame][rowIndex]['notes'] = (event.target.value);
        console.log(props.annotation_data[props.currentFrame]) 
    }

    var data = getAnnotationTableCount(props.annotation_data)
    //console.log(input.data)
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Current">
                <BootstrapTable
                    keyField='id'
                    data={props.annotation_data[props.currentFrame]} 
                    columns={props.columns(props.remove_table_index)}
                    table
                    noDataIndication={ () => <div>No recorded annotations or behaviors for this frame<br/>Please add an annotation or behavior tag to start.</div> }
                    cellEdit={
                        cellEditFactory({ mode: 'click', blurToSave: true,
                            afterSaveCell: (oldValue, newValue, row, column) => {
                                console.log(row)
                                //var notes = props.annotation_data[props.currentFrame][row['id']]['notes']
                                //props.annotation_data[props.currentFrame][row['id']] = row
                                //props.annotation_data[props.currentFrame][row['id']]['notes'] = notes
                                props.toggleKeyCheck(true)
                            },
                            onStartEdit: (row, column, rowIndex, columnIndex) => {
                                props.toggleKeyCheck(false)
                            }
                        }) 
                    }
                    pagination={ paginationFactory() }
                    expandRow={ expandRow }
                />
            </Tab>
            <Tab eventKey="profile" title="Previous">
                <BootstrapTable
                    keyField='frame_num'
                    data={data} 
                    columns={anno_col((props.handleSetCurrentFrame))}
                    table
                    noDataIndication={ () => <div>No recorded annotations or behaviors for this video.</div> }
                    pagination={ paginationFactory() }
                />
            </Tab>
        </Tabs>
    )
}