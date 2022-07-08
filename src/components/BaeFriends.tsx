import React from 'react';
import type { NextPage } from 'next';

import { CLOUDFRONT_IMG } from 'components/helper';
import BaeFriendsStyle from 'styles/BaeFriendsElement';

interface FriendsProps {
  baeFriends: any;
}

const BaeFriends: NextPage<FriendsProps> = ({ baeFriends }) => {
  return (
    <BaeFriendsStyle ref={baeFriends}>
      <div className="baefriends">BAE FRIENDS</div>
      <img src={CLOUDFRONT_IMG + "/image/separate.svg"} className="separate" alt="separate" />
      <div className="bae-friends-des">
        Our Bae area team is working hard to deliver the latest in bae
        technology including boobas 2.0, the cafe(meta)verse, and hordes of new
        bae bffs muah muahs.
      </div>
      <div className="bae-art">
        <div className="bae-item">
          <a href="https://twitter.com/sawawse" target="_blank" rel="noreferrer">
            <img src={CLOUDFRONT_IMG + "/image/pfp/sawa.jpg"} width="362" height="362" alt="bae" />
          </a>
          <div className="bae-name">Sawa (Art Bae)</div>
          <div className="bae-description">
            Taiwanese digital artist. Four-year drawing experience. Waifu and
            mecha enthusiasm. My Favorite anime: Gundam 00 / Guilty Crown
          </div>
          <div className="bae-twitter">
            <a className="twitter" href="https://twitter.com/sawawse" target="_blank" rel="noreferrer"></a>
          </div>
        </div>
        <div className="bae-item">
          <a href="https://twitter.com/habits" target="_blank" rel="noreferrer">
            <img src={CLOUDFRONT_IMG + "/image/pfp/kevin.jpg"} width="362" height="362" alt="bae" />
          </a>
          <div className="bae-name">Habits Bae</div>
          <div className="bae-description">
            Made <a href="https://twitter.com/WhaleStats" target="_blank" rel="noreferrer">WhaleStats</a>, Uwu fan for life. I like to dream
            big things and then try to build some of them with my baes.
            Everything is awesome when you&apos;re part of a team!
          </div>
          <div className="bae-twitter">
            <a className="twitter" href="https://twitter.com/habits" target="_blank" rel="noreferrer"></a>
          </div>
        </div>
        <div className="bae-item">
          <a href="https://twitter.com/aizen_shugo" target="_blank" rel="noreferrer">
            <img src={CLOUDFRONT_IMG + "/image/pfp/shugo.jpg"} width="362" height="362" alt="bae" />
          </a>
          <div className="bae-name">Shugo</div>
          <div className="bae-description">
            Shugo (Culture Bae) - art collectooor. active in uwu, sevens, ens, mrrc, 0n1, and kgf, along with other more speculative plays. over invested by a lot.
          </div>
          <div className="bae-twitter">
            <a className="twitter" href="https://twitter.com/aizen_shugo" target="_blank" rel="noreferrer"></a>
          </div>
        </div>
        <div className="bae-item">
          <a href="https://twitter.com/envynoneko" target="_blank" rel="noreferrer">
            <img src={CLOUDFRONT_IMG + "/image/pfp/ting.jpg"} width="362" height="362" style={{ objectFit: "initial" }} alt="bae" />
          </a>
          <div className="bae-name">Ting Bae</div>
          <div className="bae-description">
            Start NFT since 2021 June, was MOD in sipher. OG otaku. Loves
            everything about anime culture. !booba.
          </div>
          <div className="bae-twitter">
            <a className="twitter" href="https://twitter.com/envynoneko" target="_blank" rel="noreferrer"></a>
          </div>
        </div>
        <div className="bae-item">
          <a href="https://twitter.com/claracottontail" target="_blank" rel="noreferrer" >
            <img src={CLOUDFRONT_IMG + "/image/pfp/cotton.jpg"} width="362" height="362" alt="bae" />
          </a>
          <div className="bae-name">Cottons Bae</div>
          <div className="bae-description">
            Art collectooor. active in uwu, sevens, ens, mrrc, 0n1, and kgf,
            along with other more speculative plays. twitch mod for chess gms.
            over invested by a lot.
          </div>
          <div className="bae-twitter">
            <a className="twitter" href="https://twitter.com/claracottontail" target="_blank" rel="noreferrer" ></a>
          </div>
        </div>
      </div>
    </BaeFriendsStyle>
  );
};

export default BaeFriends;
