import  styled  from "styled-components";

const Dashboard=styled.div`
    padding: 10px;
    transition: 0.3s;
  
    .todayMoney{
        position: relative;
        padding: 10px;
        box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        margin: 10px 0;
        display: flex;
        background-color: white;
        min-height: 95% !important;
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
        min-width: 200px;
        min-height: 200px;
        .rokeImg{
        width: 180px;
        margin: auto;
        object-fit: cover;
        } 
        background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
        border-radius: 8px;  
        padding: 15px 0;
    }
    .roketInf{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
     
        
        .tm2{
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 27px;
            letter-spacing: -0.553191px;
            color: #252F40;
        }
        a{
            text-decoration: none;
            color: #67748E;
            font-size: 15px;
            &:hover{
            color: #67748E;
            font-size: 15px;
            }
        }
       
    }
    .card2{
        margin: 5px;
    }
    .recharts-responsive-container{
        height: 200px !important;
    }
    .imgworking{
        width: 100% !important;
        border-radius: 10px;
    }
    .tm11{
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: -0.553191px;
        color: white;
    }
    .tm22{
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.442553px;
        color: white;
    }
    .imgWorkingWord{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        z-index:10;
        padding: 15px;
        height: 100%;
        opacity: 0;
        color: white;
        &:hover{
           opacity: 1 !important;
        }
    }
    .tm1{
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: -0.387234px;
            color: #67748E;
    }
    .tableDollars{
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        letter-spacing: -0.66383px;
        color: #252F40;
    }
    .tableIcons{
        background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
        border-radius: 4px;
        width: 25px;
        height:25px;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tableIcons2{
        background: linear-gradient(135deg, #21D4FD 0%, #2152FF 100%);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        width: 25px;
        height:25px;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tableIcons3{
        background: linear-gradient(135deg, #FBCF33 0%, #F53939 100%);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        width: 25px;
        height:25px;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tableIcons4{
      
        background: linear-gradient(135deg, #FF667C 0%, #EA0606 100%);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        width: 25px;
        height:25px;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .firstTd{
        display: flex;
        align-items: center;
        box-sizing:border-box;
        padding: 0;
    }
    tr{
      width:100%;
      td{
        min-width: 60px !important;
    }
  }
  .row1{
      width: 100% !important;
      height: 5px;
      background-color: #E9ECEF;
      border-radius: 10px;
      .row2{
          width: 70%;
          height: 100%;
          border-radius: 10px;
      }
  }
  .tableImage{
      border-radius: 50%;
  }
`;

export default Dashboard