import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button, Popover } from 'antd';
import BannerSVGAnim from './component/BannerSVGAnim';
import QrCode from './static/qrcode_258.jpg';

export default class Banner extends React.PureComponent {
  render() {
    const { isMobile } = this.props;

    const qrcode = (
      <div className="home-banner-qrcode">
        <img
          alt="新糖小程序二维码"
          src={QrCode}
          width="120px"
          height="120px"
        />
      </div>
    );

    return (
      <div className="banner-wrapper">
        {isMobile && (
          <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
            <div className="home-banner-image">
              <img
                alt="banner"
                src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
                width="100%"
              />
            </div>
          </TweenOne>
        )}
        <QueueAnim className="banner-title-wrapper" type={isMobile ? 'bottom' : 'right'}>
          <div key="line" className="title-line-wrapper">
            <div
              className="title-line"
              style={{ transform: 'translateX(-64px)' }}
            />
          </div>
          <h1 key="h1">新糖，一种新的生活方式</h1>
          <p key="content">
            未来美学出品，专注于发现更多美好小物
          </p>
          <div key="button" className="button-wrapper">
            <Popover
              overlayClassName="popover-qrcode"
              placement={!isMobile ? 'right' : 'bottom'}
              content={qrcode}
              arrowPointAtCenter
            >
              <Button type="primary">
                关注新糖
              </Button>
            </Popover>
          </div>
        </QueueAnim>
        {!isMobile && (
          <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
            <BannerSVGAnim />
          </TweenOne>
        )}
      </div>
    );
  }
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
