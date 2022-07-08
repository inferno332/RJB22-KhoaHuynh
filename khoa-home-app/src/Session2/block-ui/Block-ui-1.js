import React from 'react'
import './Block-ui-1.css'


export default function BlockUi_1(props) {
    const {percentage, name} = props;
    return (
    <>
        <div className='row p-5'>
            <div className='block col-12'>
                <h1 className='color1'>BANDWIDTH</h1>
                <div className='color1 progress-bar percentage pl-3' style={{width:'20%' ,textAlign: 'left'}}>20%</div>
            </div>
            <div className='block col-12'>
                <h1 className='color2'>STORAGE</h1>
                <div className='color2 progress-bar percentage pl-3' style={{width:'50%' ,textAlign: 'left'}}>50%</div>
            </div>
            <div className='block col-12'>
                <h1 className='color3'>USERS</h1>
                <div className='color3 progress-bar percentage pl-3' style={{width:'70%' ,textAlign: 'left'}}>70%</div>
            </div>
            <div className='block col-12'>
                <h1 className='color4'>VISITOR</h1>
                <div className='color4 progress-bar percentage pl-3' style={{width:'30%' ,textAlign: 'left'}}>30%</div>
            </div>
            <div className='block col-12'>
                <h1 className='color5'>EMAILS</h1>
                <div className='color5 progress-bar percentage pl-3' style={{width:'45%' ,textAlign: 'left'}}>45%</div>
            </div>
            <div className='block col-12'>
                <h1 className='color6'>BASIC</h1>
                <div className='color6 progress-bar percentage pl-3' style={{width:'80%' ,textAlign: 'left'}}>80%</div>
            </div>
            <div className='block col-12'>
                <h1 className='color7'>OTHERS</h1>
                <div className='color7 progress-bar percentage pl-3' style={{width:'37%' ,textAlign: 'left'}}>37%</div>
            </div>
        </div>  
    </>
    
      
  )
}
