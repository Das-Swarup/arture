import React from 'react'

const Container = (props) => {
    return (
        <>
        <section className='mx-[20px] md:mx-[60px]'>
            {props.children}
        </section>
        </>
    )
}

export default Container
