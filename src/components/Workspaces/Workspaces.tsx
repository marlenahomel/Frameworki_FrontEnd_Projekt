import {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {SingleWorkspaceWindow} from './SingleWorkspaceWindow';
import SwiperCore, { EffectFade } from 'swiper';
SwiperCore.use([EffectFade]);

const InnerWrapper = styled.div`
    max-width:940px;
    .swiper-container {
        width:100%;
        overflow:hidden;
    }
    .swiper-wrapper {
        width:100%;
        display: flex;
}
`;

const Name = styled.p`
    margin-top:20px;
    margin-left:10px;
    font-size:${fontSize[20]};
`;

export const Workspaces: FC = () => {
    return (
        <InnerWrapper>
            <Name>Workspaces</Name>
            <Swiper
                    spaceBetween={25}
                    slidesPerView={3}
                >
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                    <SwiperSlide><SingleWorkspaceWindow></SingleWorkspaceWindow></SwiperSlide>
                </Swiper>

        </InnerWrapper>
    );
};