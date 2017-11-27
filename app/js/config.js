//var apiPath = 'http://fudao.infcn.com.cn/api/';
// var apiPath = 'http://103.254.113.10:9090/api/';
//var apiPath = 'http://103.254.113.10:8081/api/';
 var  apiPath ='http://192.168.10.165:8081/api/'


//9433AD7972E24A7B82455DA798999933
var urls = {
	//生命周期
	MYCYCLE_CALCULATECYCLE: apiPath + 'MyCycleApi/calculateCycle',
	//天气
	WEATHER: apiPath + 'WeatherApi/getWeather',
	//文章详情
	ARTICLE_GETARTICLE: apiPath + 'ArticleApi/getArticle',
	//文章详情-分享
	ARTICLE_GETSHAREARTICLE: apiPath + 'ShareApi/getShareArticle',
	//局部动作-分享
	SHAREAPI_GETSHAREONEACTTIVITY: apiPath + 'ShareApi/getShareOneActtivity',
	//组合动作-分享
	SHAREAPI_GETSHAREONEACTTIVITYGROUP: apiPath + 'ShareApi/getShareOneActtivityGroup',
    //周组数
    ARTICLE_GETWEEKSCORE:  apiPath + 'ActivityApi/getThisWeekScores',
	//添加收藏
	COLLECTION_ADDMYCOLLECTION: apiPath + 'CollectionApi/addMyCollection',
	COLLECTIONAPI_DELETEMYCOLLECTIONBYSOURCEID:apiPath + 'CollectionApi/deleteMyCollectionBySourceId',
	//问卷测评
	ASSESSMENT: apiPath + 'app/questionnaireAction!getQuestionByType.action',
	//计算得分
	CALCULATE_SCORE: apiPath + 'app/questionnaireAction!calculateScore.action',
	//获取我的时间段
	TIMEPERIOD_GETMYTIMESTAGE: apiPath + 'TimePeriodApi/getMyTimeStage',
	//获取通用时间段
	TIMEPERIODAPI_GETGENERALTIMESTAGE: apiPath + 'TimePeriodApi/getGeneralTimeStage',
	//保存我的时间段
	TIMEPERIOD_SAVEMYTIMEPERIOD: apiPath + 'TimePeriodApi/saveMyTimePeriod',
	//获取全天的运动列表
	TIMEPERIODA_GETALLDAYMOTIONLIST: apiPath + 'TimePeriodApi/getAllDayMotionList',
	//获取时间段的推荐疗法
	TIMEPERIOD_GETTIMESTAGETHERAPYLIST: apiPath + 'TimePeriodApi/getTimeStageTherapyList',
	//获取所有疗法
	TIMEPERIOD_GETTIMESTAGETHERAPYALL: apiPath+'TimePeriodApi/getTimeStageTherapyAll',
	//获取问卷列表
	DIAGNOSIS_GETQUESTIONNAIRELIST: apiPath + 'DiagnosisApi/getQuestionnaireList',
	//提交问卷
	DIAGNOSIS_SUBMITQUESTIONNAIRERESULT: apiPath + 'DiagnosisApi/submitQuestionnaireResult',
	//获取测评结果
	DIAGNOSIS_GETEVALUATIONRESULT: apiPath + 'DiagnosisApi/getEvaluationResult',
	//获取图片
	IMGSRC: apiPath + 'ImgApi/getImage?filePath=',
	//用户症状列表
	DIAGNOSIS_GETUSERSYMPTOMLIST: apiPath + 'DiagnosisApi/getUserSymptomList',
	//部位器官症状列表
	DIAGNOSIS_GETPARTORGANSYMPTOMLIST: apiPath + 'DiagnosisApi/getPartOrganSymptomList',
	//最近做过的事情列表
	DIAGNOSIS_GETRECENTTHINGLIST: apiPath + 'DiagnosisApi/getRecentThingList',

	DIAGNOSIS_SUBMITSYMPTOM: apiPath + 'DiagnosisApi/submitSymptom',
	//获取登陆用户信息
	USER_GETLOGINUSER: apiPath + 'UserApi/getLoginUser',
	//获取节气信息
	HEALTH_GETSOLARTERM: apiPath + 'HealthApi/getSolarTerm',
	// 能量场数据保存
	ENERGY_SUBMITSYMPTOM: apiPath + 'EnergyApi/submitInformationResult',
	// 获取能量场数据
	ENERGY_GET: apiPath + 'EnergyApi/getEnergy',
	//获取疾病相关
	DISEASE_RELEVANT: apiPath + 'DiseaseApi/getDiseaseRelevant',
	//获取自修相关
	EXCEPT_RELEVANT: apiPath + 'ExpectApi/getExpectRelevant'


}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
