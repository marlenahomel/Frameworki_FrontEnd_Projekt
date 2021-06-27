import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';

const InnerWrapper = styled.div`
`;

const Box = styled.div`
    margin:20px 20px 20px 0;
    box-shadow: 1px 2px 10px ${Colors.boxShadow};
`;

const CustomImage = styled.img`
    width:220px;
`;

const Icon = styled.div`
    img{
    width:60px;
    height:60px;
    padding:6px;
    background:${Colors.white};
    margin-top:-30px;
    margin-left:7px;
    box-shadow: 1px 2px 10px ${Colors.boxShadow};
    }
    p{
        font-size:${fontSize[18]};
        margin-left:90px;
        margin-top:-40px;
    }
`;

const AndUsers = styled.div`
    margin-left:12px;
    margin-top:40px;
    img{
        width:20px;
        margin-right:5px;
    }
    span{
        margin-left:10px;
        margin-right:20px;
    }
    p{
        margin-top:15px;
        margin-bottom:10px;
        padding-bottom: 10px;
        color:${Colors.lightgray2}
    }

`;
export const SingleWorkspaceWindow: FC = () => {
    return (
        <InnerWrapper>
                <Box>
                    <CustomImage src="./media/contractsign.jpg"/>
                        <Icon>
                            <img src="./media/contractbig.jpg"/>
                            <p>Client contract</p>
                        </Icon>
                        <AndUsers>
                            <img src="./media/contractsmall.jpg"/>
                            Contract
                            <span>&#9679;</span>
                            <img src="./media/userssmall.jpg"/>
                            150 users
                            <p>Last update 2 day ago</p>
                        </AndUsers>
                </Box>
        </InnerWrapper>
    );
};