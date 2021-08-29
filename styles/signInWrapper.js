import styled from "styled-components";


const signInWrapper = styled.div`
.list{
    list-style-type: none;
}
.cardreader{
    position: absolute;
    left: 40px;
    bottom: 240px;
    padding: 20px 20px;
    width: 35%;

}

.soft {
    
    text-decoration: none;
    color: #252F40;
    font-weight: bold;
}
.navbar {
    
    position: relative;
    border-radius: 10px;
}
.nav-itembut {
    background: linear-gradient(135deg, #3A416F 0%, #141727 100%);
    padding: 0 20px;
    border-radius: 10px;
}
.signbutton{
    border-radius: 8px;
    text-align: center;
    background: linear-gradient(135deg, #21D4FD 0%, #2152FF 100%);
/*box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);*/
}`




export default signInWrapper;