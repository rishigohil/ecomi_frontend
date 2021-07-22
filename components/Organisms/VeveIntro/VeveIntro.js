import { useEffect, useState, useRef } from 'react'
import moment from "moment"
import { getVeveMetrics } from "../../../actions/metrics/metrics"
import PriceCard from "../../Molecules/Cards/PriceCard"
import dynamic from "next/dynamic"
import { Noise } from 'noisejs'

// Icons
const CheckIcon = dynamic(() => import('../../../components/Misc/LordIcon').then((mod) => mod.CheckIcon), {
    ssr: false
});


const VeveIntro = () => {

    const VeveIntroStripSection = () => {
        return(
            <section className={`veve-intro pt-4 pb-4 sm:pt-5 md:pt-6 xl:pt-8 sm:pb-5 bg-gray-900 borer-t border-b border-black text-white text-center shadow-inner shadow-lg`}>
                <div className="container">
                    <small className={`block mb-5 text-sm text-gray-300`}>The ECOMI team presents...</small>
                    <h1 className="text-5xl sm:text-6xl lg:text-6xl leading-none font-medium tracking-tight text-gray-900 mb-8 sm:mb-10">
                        <img src={`./assets/images/veve-logo--white.png`} width={`300`} className={`mx-auto`} alt={`VEVE`} />
                    </h1>
                    <p className={`font-base text-xl leading-relaxed`}>
                        VEVE is an app-based marketplace available on iOS and Android for premium <strong>licensed</strong> digital collectibles (Non-Fungible Tokens/NFTs).
                        With VEVE, users can obtain common, rare, or one-of-a-kind digital collectibles, customise and showcase them in the virtual showrooms,
                        as well as buy, sell or trade collectibles with other VEVE users.
                    </p>

                    <ul className={`my-10`}>
                        <li className={`inline-block mr-3`}><a href="#" target={"_blank"} className={`border border-white text-white font-base py-2 px-4 rounded-full font-semibold`}>Google play</a></li>
                        <li className={`inline-block`}><a href="#" target={"_blank"} className={`border border-white text-white font-base py-2 px-4 rounded-full font-semibold`}>App store</a></li>
                    </ul>
                </div>
            </section>
        )
    }

    const VeveMetricsSection = () => {
        const [vevemetrics, setVeveMetrics] = useState()

        useEffect(() => {
            getVeveMetrics()
                .then(data => {
                    console.log('Metric data is: ', data)
                    setVeveMetrics(data)
                })
                .catch((e) => console.log('Error getting veve metrics: ', e))

        },[])

        return(
            <section className={` pt-4 pb-4 sm:pt-5 md:pt-6 xl:pt-8 sm:pb-5 text-white mt-10`}>
                <div className="container">

                    <small className="block mt-5 mb-2 sm:mb-5 text-gray-300">
                        VEVE metrics as of {moment(vevemetrics && vevemetrics.revenue.last_updated).format('MMMM Do YYYY, h:mm:ss a')} (<a href={"https://cutt.ly/wbT97hb"} target={"_blank"} className={`text-pink-500`}>https://cutt.ly/wbT97hb</a>)
                    </small>

                    <ul className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6`}>
                        <li><PriceCard value={vevemetrics && vevemetrics.revenue.currentStoreRevenue.toLocaleString()} label={`Total sales`} suffix={"$"} classes={`text-green-500`} /></li>
                        <li><PriceCard value={vevemetrics && vevemetrics.revenue.twenty_four_hour_change.toFixed(3)} label={`24 hour change`} prefix={"%"} /></li>
                        <li><PriceCard value={vevemetrics && vevemetrics.revenue.seven_day_change.toFixed(3)} label={`7 day change`} prefix={"%"} /></li>
                        <li><PriceCard value={vevemetrics && vevemetrics.revenue.thirty_day_change.toFixed(3)} label={`30 day change`} prefix={"%"} /></li>
                        <li><PriceCard value={vevemetrics && vevemetrics.nfts.currentNFTSales.toLocaleString()} label={`No. NFT sales`} classes={`text-green-500`} /></li>
                        <li><PriceCard value={vevemetrics && vevemetrics.nfts.thirty_day_change_nft.toFixed(3)} label={`30 day change`} prefix={"%"} /></li>
                    </ul>

                </div>
            </section>
        )
    }

    const VeveMarketSection = () => {
        return(
            <section className={`pt-4 pb-4 sm:pt-5 md:pt-6 xl:pt-8 sm:pb-5 text-white mt-10`}>
                <div className="container">

                    <h4 className={`text-2xl font-semibold mb-3 uppercase`}>$370 Billion dollar market</h4>

                    <p className="mb-8 text-xl leading-relaxed">
                        The collectibles industry is said to be worth approximately $370 billion dollars as of March 2020
                        <span className={`cursor-pointer`} data-tip={`Source: <strong className="font-bold z-10"><a href="https://techcrunch.com/2020/03/25/the-future-of-collectibles-is-digital/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIu8AJeYB16zZo4BOLLKZdJd3lfzCHdUFBUQZoJm-zvnHvWGSrALKXtClg4P7wG9QPXodNAO7aQRwXJBnyaWF7kN0oPeaOgGOrTMy4numrPdywZXhsOAhZvfn4KUSbuGI5R4cK_nBO_cJFzyfXYrUEoMfcVWwDYEj0b4NsdaXuq1" target="_blank" class="text-pink-500">techcrunch.com</a></strong>`} data-html={true} data-event='click focus'>
                            <CheckIcon />
                        </span>.
                        VEVE identified a gap in this market for premium digital collectibles backed by blockchain technology, which allows uniqueness,
                        scarcity and accurate provenance of collectibles. The rise of NFT popularity in 2021 is thought to exponentially increase this
                        industry worth over the coming years. VEVE have positioned themselves to be a front runner for the premium digital collectible
                        format due to their early foresight in 2017.
                    </p>

                    <p className="mb-8 text-xl leading-relaxed">
                        Using the VEVE app collectible enthusiasts and hobbyists can purchase a multitude of collectibles from their favourite brands.
                        Each collectible is minted within a limited number of availability and is assigned a type of rarity typically associated with
                        collectibles. The app was officially launched in October 2020 and regularly drops new collectibles every Thursday 4pm GMT - <strong>The drops reguarly sell out within minutes!</strong>
                        <span className={`cursor-pointer`} data-tip={`Verified by various sources: <a href="https://youtu.be/LkRZtFeh88A?t=3438" target="_blank" class="text-pink-500">YouTube Live</a>`} data-html={true} data-event='click focus'>
                                <CheckIcon />
                        </span>
                    </p>

                </div>
            </section>
        )
    }

    const VevePremiumBrandsSection = () => {

        const CANVAS_WIDTH = 3000;
        // The amplitude. The amount the noise affects the movement.
        const NOISE_AMOUNT = 5;
        // The frequency. Smaller for flat slopes, higher for jagged spikes.
        const NOISE_SPEED = 0.004;
        // Pixels to move per frame. At 60fps, this would be 18px a sec.
        const SCROLL_SPEED = 0.3;

        const bubbles = [
            {
                s: 0.6,
                x: 1134,
                y: 45,
            },
            {
                s: 0.6,
                x: 1620,
                y: 271,
            },
            {
                s: 0.6,
                x: 1761,
                y: 372,
            },
            {
                s: 0.6,
                x: 2499,
                y: 79,
            },
            {
                s: 0.8,
                x: 2704,
                y: 334,
            },
            {
                s: 0.6,
                x: 2271,
                y: 356,
            },
            {
                s: 0.6,
                x: 795,
                y: 226,
            },
            {
                s: 0.6,
                x: 276,
                y: 256,
            },
            {
                s: 0.6,
                x: 1210,
                y: 365,
            },
            {
                s: 0.6,
                x: 444,
                y: 193,
            },
            {
                s: 0.6,
                x: 2545,
                y: 387,
            },
            {
                s: 0.8,
                x: 1303,
                y: 193,
            },
            {
                s: 0.8,
                x: 907,
                y: 88,
            },
            {
                s: 0.8,
                x: 633,
                y: 320,
            },
            {
                s: 0.8,
                x: 323,
                y: 60,
            },
            {
                s: 0.8,
                x: 129,
                y: 357,
            },
            {
                s: 0.8,
                x: 1440,
                y: 342,
            },
            {
                s: 0.8,
                x: 1929,
                y: 293,
            },
            {
                s: 0.8,
                x: 2135,
                y: 198,
            },
            {
                s: 0.8,
                x: 2276,
                y: 82,
            },
            {
                s: 0.8,
                x: 2654,
                y: 182,
            },
            {
                s: 0.8,
                x: 2783,
                y: 60,
            },
            {
                s: 1.0,
                x: 1519,
                y: 118,
            },
            {
                s: 1.0,
                x: 1071,
                y: 233,
            },
            {
                s: 1.0,
                x: 1773,
                y: 148,
            },
            {
                s: 1.0,
                x: 2098,
                y: 385,
            },
            {
                s: 1.0,
                x: 2423,
                y: 244,
            },
            {
                s: 1.0,
                x: 901,
                y: 385,
            },
            {
                s: 1.0,
                x: 624,
                y: 111,
            },
            {
                s: 1.0,
                x: 75,
                y: 103,
            },
            {
                s: 1.0,
                x: 413,
                y: 367,
            },
            {
                s: 1.0,
                x: 2895,
                y: 271,
            },
            {
                s: 1.0,
                x: 1990,
                y: 75,
            },
        ];

        const noise = new Noise();

        const animationRef = useRef();
        const bubblesRef = useRef(
            bubbles.map((bubble) => ({
                ...bubble,
                noiseSeedX: Math.floor(Math.random() * 64000),
                noiseSeedY: Math.floor(Math.random() * 64000),
                xWithNoise: bubble.x,
                yWithNoise: bubble.y,
            })),
        );

        const [isReady, setReady] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                setReady(true);
            }, 200);

            animationRef.current = requestAnimationFrame(animate);

            return () => {
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            };
        }, []);

        function animate() {
            bubblesRef.current = bubblesRef.current.map((bubble, index) => {
                const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
                const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;

                const randomX = noise.simplex2(newNoiseSeedX, 0);
                const randomY = noise.simplex2(newNoiseSeedY, 0);

                const newX = bubble.x - SCROLL_SPEED;

                const newXWithNoise = newX + randomX * NOISE_AMOUNT;
                const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

                const element = document.getElementById(`bubble-${index}`);

                if (element) {
                    element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
                }

                return {
                    ...bubble,
                    noiseSeedX: newNoiseSeedX,
                    noiseSeedY: newNoiseSeedY,
                    x: newX < -200 ? CANVAS_WIDTH : newX,
                    xWithNoise: newXWithNoise,
                    yWithNoise: newYWithNoise,
                };
            });

            animationRef.current = requestAnimationFrame(animate);
        }

        const backgroundPositions = [];

        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
            }
        }

        return(
            <section className={`pt-4 pb-4 text-white text-center mb-10 overflow-hidden mt-10`}>
                <h4 className="text-2xl mb-3">
                    Premium brands and licenses
                    <span className={`cursor-pointer inline-block`} data-tip={`Announced Feb 20th 2020 <a href="https://medium.com/ecomi/huge-international-licenses-announced-for-ve-ve-d84f747c96ce" target="_blank" class="text-pink-500">https://medium.com/ecomi/huge-international-licenses-announced-for-ve-ve-d84f747c96ce</a>`} data-html={true} data-event='click focus'>
                        <CheckIcon />
                    </span>
                </h4>
                <small className="block text-base text-gray-300">
                    ECOMI has composed itself with an all star team with a rich and vetted reputation of successful businesses.
                </small>

                <div className="bubbles-wrapper">
                    <div className="bubbles">
                        {bubbles.map((bubble, index) => (
                            <div
                                className="bubble"
                                id={`bubble-${index}`}
                                key={`${bubble.x} ${bubble.y}`}
                                style={{
                                    backgroundPosition: backgroundPositions[index],
                                    opacity: isReady ? 1 : 0,
                                    transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
                                }}
                            />
                        ))}
                    </div>
                </div>

            </section>
        )
    }

    return(
        <>
            {VeveIntroStripSection()}
            {VeveMetricsSection()}
            {VeveMarketSection()}
            {VevePremiumBrandsSection()}
        </>
    )
}

export default VeveIntro