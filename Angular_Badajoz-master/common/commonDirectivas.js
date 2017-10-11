angular.module("commonModule")
.directive('appPie', function () {
    return {
        template : `
        <footer>
		    <p>{{author}} - Madrid 2017</p>
	    </footer>        
        `,
        restrict : 'AE',
        scope : {
            author : '@autor'
        }
    }
})
    


