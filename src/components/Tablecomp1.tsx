import {useEffect, useState} from 'react';
import { Todoitem } from '../models';
import { DataGrid,  } from '@mui/x-data-grid';
import { Box, } from '@mui/material';
import BasicAccordion from './BasicAccordion';



const Tablecomp1 = () => {

const [data, setData] = useState<Todoitem[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response)
        .then((e) => e.json())
        .then((e) => setData(e as Todoitem[]));
    }, []); 


    const columns = [
        {field: "userId", headername: "UserId", width: 90},
        {field: "id", headername:"Id",width:150},
        {field: "title", headername:"Title",width:150},
        {field: "body", headername:"Body",width:90},
        
    ];
     
    

   const rows = data.map((Todoitem) => ({

        userId:Todoitem.userId,
        id:Todoitem.id,
        title:Todoitem.title,
        body:Todoitem.body,

   })
        

    )

  return (

        <Box width={'100%'} height={'100vh'}  >
        

            <DataGrid sx={{width:700, ml:'25%', mt:5}}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination:{paginationModel:{pageSize:10}},
                }}
            />
        <BasicAccordion></BasicAccordion>
        </Box>
        
   

  )  
    
}

export default Tablecomp1;