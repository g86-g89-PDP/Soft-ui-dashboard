import  styled  from "styled-components";

const Dashboard=styled.div`
    padding: 10px;
    transition: 0.3s;
    .todayMoney{
        padding: 10px 0;
        border-radius: 10px;
        box-shadow: 0 2px 3px  gray;
        margin: 10px 0;
        display: flex;
        .tm3{
            font-weight: bold;
            font-size: 14px;
            line-height: 19px;
            /* identical to box height */
            letter-spacing: -0.387234px;
            color: #82D616;
            margin-top: 0 !important;
        }
        .tmIconsCard{
            background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
            box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
            border-radius: 8px;
            width: 45px;
            height: 45px;
            margin: auto !important;
            display:flex;
            justify-content: center;
            align-items: center;
        }
    }
    .roketCard{
        .rokeImg{
        width: 300px;
        } 
        background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
        border-radius: 8px;  
        padding: 15px 0;
    }
    .roketInf{
        .tm1{
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: -0.387234px;
            color: #67748E;
        }
        .tm2{
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 27px;
            letter-spacing: -0.553191px;
            color: #252F40;
        }
       
    }
    
`;

export default Dashboard