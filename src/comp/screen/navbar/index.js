import React, { useEffect, useState } from "react";


import i18n from 'i18next';


import { connect } from "react-redux";

import Actions from "../../redux/action";
import Constants from "../../utils/Constants";

const { MasterDrawerMenuType, MasterDrawerMenuConfig } = Constants;

const NavBarView = (props) => {
	const { userConfig } = props;

	const [state, setState] = useState({
		selectedMenuType:
			userConfig?.selectedMenuType ?? MasterDrawerMenuType.Search,
	});

	const updateState = (data) =>
		setState((preState) => ({ ...preState, ...data }));

	/*  Life-cycles Methods */

	useEffect(() => {
		return () => {};
	}, []);

	useEffect(() => {
		updateState({
			selectedMenuType:
				userConfig?.selectedMenuType ?? MasterDrawerMenuType.Search,
		});
	}, [userConfig]);

	/*  Public Interface Methods */

	/*  UI Events Methods   */

	const handleRussian = () => {
		i18n.changeLanguage('ru');
	};

	const handleEnglish = () => {
		i18n.changeLanguage('en');
	};

	/*  Server Request Methods  */

	/*  Server Response Methods  */

	/*  Server Response Handler Methods  */

	/*  Custom-Component sub-render Methods */

	const renderMasterContainer = () => {
		return (
			<>
				
			</>
		);
	};

	return renderMasterContainer();
};

const mapStateToProps = (state) => {
	return {
		userConfig: state.userConfig,
		userPref: state.userPref,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserConfig: (userConfig) =>
			dispatch(Actions.setUserConfig(userConfig)),
		setUserPref: (userPref) => dispatch(Actions.setUserPref(userPref)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarView);
