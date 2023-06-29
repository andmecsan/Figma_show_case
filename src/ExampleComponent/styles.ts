import styled from "styled-components";


export const Container = styled.div`
display: flex;
width: 343px;
padding: 16px 12px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background-color: white;
border-radius: 8px;
gap: 8px;
box-shadow: 0px 1px 3px 0px rgba(30, 30, 49, 0.12), 0px 4px 12px -8px rgba(30, 30, 49, 0.16);
`

export const Text = styled.h3`
color: #1E1E31;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
margin: 0;
`


export const SubText = styled.p`
color: #515164;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 0;
`

export const TagContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
`