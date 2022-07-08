import type { NextPage } from 'next';

import TeamStyle from 'styles/Season2/TeamElement';

import { CLOUDFRONT_IMG } from 'components/helper';
import BaeFriendsStyle from 'styles/BaeFriendsElement';

const Team: NextPage = () => {
  return (
    <TeamStyle>
      <div style={{ height: '55px' }}></div>
      <div className="bae-art">
        <div className="bae-item">
          <a
            href="https://twitter.com/sawawse"
            target="_blank"
            rel="noreferrer"
          >
            <div className="team-firstParent">
              <div className="team-titleText">Team</div>
              <img
                style={{ objectFit: 'cover' }}
                src={CLOUDFRONT_IMG + '/season2/team/ic-team-sawa.jpg'}
                width="362"
                height="362"
                alt="bae"
              />
            </div>
          </a>
          <div style={{ height: '8px' }}></div>
          <div className="bae-name">Sawa</div>
          <div style={{ height: '4px' }}></div>
          <div className="bae-description">
            Taiwanese digital artist. Four-year drawing experience. Waifu and
            mecha enthusiasm.
          </div>
          <div className="bae-twitter">
            <a
              className="twitter"
              href="https://twitter.com/sawawse"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
        <div className="bae-item">
          <a href="https://twitter.com/habits" target="_blank" rel="noreferrer">
            <img
              style={{ objectFit: 'cover' }}
              src={CLOUDFRONT_IMG + '/season2/team/ic-team-habits.jpg'}
              width="362"
              height="362"
              alt="bae"
            />
          </a>
          <div style={{ height: '8px' }}></div>
          <div className="bae-name">Habits</div>
          <div style={{ height: '4px' }}></div>
          <div className="bae-description">
          Built{' '}
            <a
              href="https://twitter.com/WhaleStats"
              target="_blank"
              rel="noreferrer"
              className="bae-description"
            >
              WhaleStats
            </a> {' '}
            and {' '}
            <a
              href="https://twitter.com/kryptkitties"
              target="_blank"
              rel="noreferrer"
              className="bae-description"
            >
              KryptKitties
            </a>.  <a
              href="https://twitter.com/habits"
              target="_blank"
              rel="noreferrer"
              className="bae-description"
            >
              @habits
            </a> on Twitter. Waifus4life
          </div>
          <div className="bae-twitter">
            <a
              className="twitter"
              href="https://twitter.com/habits"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
        <div className="bae-item">
          <a
            href="https://twitter.com/sayuki_0123"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ objectFit: 'cover' }}
              src={CLOUDFRONT_IMG + '/season2/team/ic-team-sayuki.jpg'}
              width="362"
              height="362"
              alt="bae"
            />
          </a>
          <div style={{ height: '8px' }}></div>
          <div className="bae-name">SA’yuki</div>
          <div style={{ height: '4px' }}></div>
          <div className="bae-description">Illustrator from Malaysia</div>
          <div className="bae-twitter">
            <a
              className="twitter"
              href="https://twitter.com/sayuki_0123"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
        <div className="bae-item">
          <a
            href="https://twitter.com/chasethefeel"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CLOUDFRONT_IMG + '/season2/team/ic-team-chasetheFeel.jpg'}
              width="362"
              height="362"
              style={{ objectFit: 'initial' }}
              alt="bae"
            />
          </a>
          <div style={{ height: '8px' }}></div>
          <div className="bae-name">Chasethefeel</div>
          <div style={{ height: '4px' }}></div>
          <div className="bae-description">
            always chasing the feels, regularly in the chat, part of multiple
            nft projects, in crypto since 2016, always looking for ways to
            improve
          </div>
          <div className="bae-twitter">
            <a
              className="twitter"
              href="https://twitter.com/chasethefeel"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
        <div className="bae-item">
          <a
            href="https://twitter.com/claracottontail"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ objectFit: 'cover' }}
              src={CLOUDFRONT_IMG + '/season2/team/ic-team-cottons.jpg'}
              width="362"
              height="362"
              alt="bae"
            />
          </a>
          <div style={{ height: '8px' }}></div>
          <div className="bae-name">cottons.eth</div>
          <div style={{ height: '4px' }}></div>
          <div className="bae-description">Here for the art. GM</div>
          <div className="bae-twitter">
            <a
              className="twitter"
              href="https://twitter.com/claracottontail"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
        <img src="/image/wlc/twitter2.svg" style={{ display: 'none' }} alt="" />
      </div>
    </TeamStyle>
  );
};

export default Team;
