const Header = ({ title }) => {
	return (
		<>
			<header
				style={{
					padding: "1rem",
					backgroundColor: "2bef9d",
					color: "white",
					textAlign: "center",
				}}
			>
				{title}
			</header>
		</>
	);
};

export default Header;
