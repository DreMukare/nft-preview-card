import '../styles/card.scss';
import equilibrium from '../images/image-equilibrium.jpg';
import iconEthereum from '../images/icon-ethereum.svg';
import iconView from '../images/icon-view.svg';
import iconClock from '../images/icon-clock.svg';
import avatar from '../images/image-avatar.png';

const Card = () => {
	return (
		<div className='card'>
			<div className='card__image'>
				<img src={equilibrium} alt='nft preview' />
				<div className='overlay'>
					<img src={iconView} alt='eye' />
				</div>
			</div>
			<section className='card__content'>
				<h2>Equilibrium #3429</h2>
				<p>Our Equilibrium collection promotes balance and calm.</p>
			</section>
			<section className='card__detail'>
				<div className='price'>
					<section className='image'>
						<img src={iconEthereum} alt='Ethereum icon' />
					</section>
					<p>0.041ETH</p>
				</div>
				<div className='time'>
					<img src={iconClock} alt='clock icon' />
					<p>3 days left</p>
				</div>
			</section>
			<hr />
			<section className='card__attribution'>
				<img src={avatar} alt='Creator of NFT' />
				<p>
					Creation of <span>Jules Wyvern</span>
				</p>
			</section>
		</div>
	);
};

export default Card;
