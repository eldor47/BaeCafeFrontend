import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface ModalProps {
    remainingTime: any;
    handleCountDown: () => void;
    text?: string;
}

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 60,
    strokeWidth: 4,
    marginRight: 20,
};

// eslint-disable-next-line react/display-name
const WalletModal: React.FC<ModalProps> = React.memo(
    ({ remainingTime, handleCountDown, text }) => {
        const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
        const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
        const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
        const getTimeDays = (time) => (time / daySeconds) | 0;

        const daysDuration = 14 * daySeconds;
        const renderTime = (dimension, time) => {
            return (
                <div className="time-wrapper">
                    <div className="time">{time}<span style={{ marginLeft: 2 }}>{dimension}</span></div>
                    {/* <div className="second">{dimension}</div> */}
                </div>
            );
        };
        const addtionClass = () => {
            if (remainingTime / daySeconds >= 1) {
                return "four";
            }
            if (remainingTime / hourSeconds >= 1) {
                return "three"
            }
            if (remainingTime / minuteSeconds >= 1) {
                return "two"
            }
            return "one";
        }
        return (
            <div className="countdown">
                <div className="mint-text">{text}</div>
                <div className={`timer-wrapper ${addtionClass()}`}>
                    {remainingTime / daySeconds >= 1 && (
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#1864AB"
                            trailColor="#A5D8FF"
                            duration={daysDuration}
                            initialRemainingTime={remainingTime}
                        >
                            {({ elapsedTime, color }: any) => (
                                <span style={{ color: '#A5D8FF' }}>
                                    {renderTime("d", getTimeDays(daysDuration - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                    )}
                    {remainingTime / hourSeconds >= 1 && (
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#364FC7"
                            trailColor="#BAC8FF"
                            duration={daySeconds}
                            initialRemainingTime={remainingTime % daySeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                            })}
                        >
                            {({ elapsedTime, color }: any) => (
                                <span style={{ color: '#BAC8FF' }}>
                                    {renderTime("h", getTimeHours(daySeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                    )}
                    {remainingTime / minuteSeconds >= 1 && (
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#5F3DC4"
                            trailColor="#D0BFFF"
                            duration={hourSeconds}
                            initialRemainingTime={remainingTime % hourSeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                            })}
                        >
                            {({ elapsedTime, color }: any) => (
                                <span style={{ color: '#D0BFFF' }}>
                                    {renderTime("m", getTimeMinutes(hourSeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                    )}
                    <CountdownCircleTimer
                        {...timerProps}
                        colors="#862E9C"
                        trailColor="#EEBEFA"
                        duration={minuteSeconds}
                        initialRemainingTime={remainingTime % minuteSeconds}
                        onComplete={(totalElapsedTime) => {
                            let shouldRepeat = remainingTime - totalElapsedTime;
                            if (shouldRepeat <= 0) {
                                handleCountDown();
                            }
                            return { shouldRepeat: remainingTime - totalElapsedTime > 0 }
                        }}
                    >
                        {({ elapsedTime, color }: any) => (
                            <span style={{ color: '#EEBEFA' }}>
                                {renderTime("s", getTimeSeconds(elapsedTime))}
                            </span>
                        )}
                    </CountdownCircleTimer>
                </div>
            </div>
        );
    }
);

export default WalletModal;
