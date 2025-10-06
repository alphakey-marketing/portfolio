'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function RandomFactSection(props) {
    const { elementId, colors, styles = {} } = props;
    
    const facts = [
        "我曾經同時為「對」、「錯」、「中性」三種觀點打分，結果自己都搞不清最後到底應該站哪邊。",
        "每次跟朋友討論時，我的筆記本上至少會留下一頁「我的直覺為 X，但數據顯示 Y」的掙扎紀錄。",
        "我曾在辯論賽中途突然停止，閉眼聽「內心的聲音」，結果那聲音告訴我──「快出去透透氣」，讓我提前結束發言。",
        "當別人說「隨便」，我心裡會同時出現三種選項的利弊分析，最後發訊息：「我們不如先約咖啡再決定？」"
    ];

    const getRandomFact = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
    };

    const [currentFact, setCurrentFact] = useState(getRandomFact());

    const showRandomFact = () => {
        let newFact = getRandomFact();
        while (newFact === currentFact && facts.length > 1) {
            newFact = getRandomFact();
        }
        setCurrentFact(newFact);
    };

    const sectionAlign = styles.self?.textAlign ?? 'center';

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            <div className={classNames('flex flex-col items-center gap-4', mapStyles({ textAlign: sectionAlign }))}>
                <button
                    onClick={showRandomFact}
                    className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    🎲 告訴我一個關於我的隨機事實
                </button>
                {currentFact && (
                    <div className="mt-6 p-6 max-w-3xl text-lg sm:text-xl font-semibold text-center bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl border-2 border-white border-opacity-30 transition-all duration-500">
                        {currentFact}
                    </div>
                )}
            </div>
        </Section>
    );
}
