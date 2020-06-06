module.exports = {
	
	configureWebpack:{
		
		resolve:{
			
			//别名设置
			alias:{
				// '@':'src',           //这个是默认配置的
				'assets':'@/assets',           
				'common':'@/common',          
				'components':'@/components',
				'network':'@/network',
				'router':'@/rooter',
				'store':'@/store',
				'views':'@/views'
				
			},
			
	// 		//省略掉文件后缀名
	// 		extensions: []
		}
	}
	
}