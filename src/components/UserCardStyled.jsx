import styled from 'styled-components'
import { motion } from 'framer-motion'

export const UsersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    margin-bottom: 2rem;
    margin-left: 4rem;
`

export const Card = styled(motion.div)`
    height: 440px;
    width: 30%;
    margin: 1rem;
    background: #343444;
    border-radius: 20px;
    margin-bottom: 40px;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s ease-in-out;
`

export const CardMedia = styled(motion.div)`
    height: auto;
    margin: 10px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        transition: all .3s ease;
    }

`
export const CardBody = styled.div`
    padding: 4px 20px 20px;
`
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 15px;

    span{
        color: orangered;
        margin-bottom: 15px;
        font-size: 16px;
        font-family: sans-serif;
    }
`

export const MoreInfo = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

`

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
`

export const Avatar = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
    margin-right: 12px;
    flex-shrink: 0;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
export const UsernameInfo = styled.div`
    margin:2px;
    span{
        color: orangered;
        font-size: 12px;
    }

`
export const Username = styled.h5`
    display: flex;
    margin-top: 6px;   
`
export const UsernameText = styled.div`
    overflow: hidden;
    font-size: 10px;
    text-overflow: ellipsis;
    letter-spacing: .1rem;
    white-space: nowrap;
    margin-left: .3rem;

`

export const CityInfo = styled.div`
    max-width: 140px;
    span{
        color: orangered;
        font-size: 12px;
    }

`
export const City = styled.h5`
    display: flex;
    margin-top: 6px;   
`
export const CityText = styled.div`
    overflow: hidden;
    font-size: 10px;
    letter-spacing: .1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: .3rem;
`

export const MetaOtherInfoList = styled(motion.div)`
`
export const MetaOtherInfoListItem = styled.div`
    font-weight: 300;
    display: flex;
    align-items:  center;
    justify-content: space-between;
    font-size: 14px;
    padding: 14px 0;

    &:not(:last-child){
        border-bottom: 1px solid #232323;
    }
    &>:last-child{
        font-size: 14px;
        font-weight: 500;
        text-align: right;
        color: orangered;
    }

`
