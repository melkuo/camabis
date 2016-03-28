!function(){"use strict";angular.module("app",["firebase","myApp.config","ngAnimate","ngRoute","vAccordion"])}(),angular.module("myApp.config",[]).constant("databaseUrl","https://camabisapp.herokuapp.com"),function(){"use strict";function o(o,e,t){function n(t){o.get(e+"/api/concerns").success(function(o){t(o)}).error(function(o){console.log("Didn't get concerns properly"+o)})}function a(t,n){console.log(t),o({method:"POST",url:e+"/api/photo",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/x-www-form-urlencoded"},data:t}).success(function(o){console.log("Sucessfully posted photo.")}).error(function(o){console.log("Didn't post photo properly"+o)})}var i={getConcerns:n,postPhoto:a};return i}angular.module("app").factory("DatabaseFactory",o),o.$inject=["$http","databaseUrl","$rootScope"]}(),angular.module("app").config(["$routeProvider",function(o){o.when("/",{templateUrl:"home.html",controller:"HomeController"}).otherwise({redirectTo:"/"})}]),angular.module("app").config(["$httpProvider",function(o){o.defaults.useXDomain=!0,delete o.defaults.headers.common["X-Requested-With"]}]),function(){"use strict";function o(o,e,t,n){function a(){i(),e.getConcerns(function(o){t.concernContainer=o})}function i(){o.get("jmap.json").success(function(o){t.jmap=o}).error(function(o){console.log("Didn't get jmap properly")})}function c(t){var n={method:"POST",url:"https://api.imgur.com/3/image",headers:{Authorization:"Client-ID a83b8d484886938","Content-type":"application/x-www-form-urlencoded"},data:t};o(n).then(function(o){console.log(o.data.data.link),e.postPhoto(o.data.data.link,function(){})},function(o){console.log(o)})}function r(o){l.classList.remove("active"),m.classList.remove("active"),p.classList.remove("active"),o.classList.add("active")}var s=document.querySelector("[name='upload-photo']"),l=document.querySelector("[role='goNew']"),m=document.querySelector("[role='goResolved']"),p=document.querySelector("[role='goNonissue']");n.mobile=document.documentElement.classList.contains("mobile"),t.showNav=!n.mobile,t.status="new",s.addEventListener("change",function(o){o.preventDefault();for(var e=o.target.files,t=0;t<e.length;t++){var n=e[t];if(!n.type.match(/image.*/))return alert("Only images are accepted.");c(n)}}),l.addEventListener("click",function(o){l.classList.contains("active")||r(l)}),m.addEventListener("click",function(o){m.classList.contains("active")||r(m)}),p.addEventListener("click",function(o){p.classList.contains("active")||r(p)}),r(l),a(),t.toggleNav=function(){t.showNav=!t.showNav}}angular.module("app").controller("HomeController",o),o.$inject=["$http","DatabaseFactory","$scope","$rootScope"]}(),function(o){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4)))&&document.documentElement.classList.add("mobile")}(navigator.userAgent||navigator.vendor||window.opera);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsIkNvbmZpZy9jb25maWcuanMiLCJEYXRhYmFzZS9EYXRhYmFzZS5mYWN0b3J5LmpzIiwiUm91dGVzL3JvdXRlcy5qcyIsIkhvbWUvSG9tZS5jb250cm9sbGVyLmpzIiwibGliL2RldGVjdG1vYmlsZWJyb3dzZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwiRGF0YWJhc2VGYWN0b3J5IiwiJGh0dHAiLCJkYXRhYmFzZVVybCIsIiRyb290U2NvcGUiLCJnZXRDb25jZXJucyIsImNhbGxiYWNrIiwiZ2V0Iiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwb3N0UGhvdG8iLCJyZXMiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luIiwiQ29udGVudC10eXBlIiwicmVzcCIsInNlcnZpY2UiLCJmYWN0b3J5IiwiJGluamVjdCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsInJlZGlyZWN0VG8iLCIkaHR0cFByb3ZpZGVyIiwiZGVmYXVsdHMiLCJ1c2VYRG9tYWluIiwiY29tbW9uIiwiSG9tZUNvbnRyb2xsZXIiLCIkc2NvcGUiLCJhY3RpdmF0ZSIsImdldEptYXAiLCJjb25jZXJucyIsImNvbmNlcm5Db250YWluZXIiLCJqbWFwIiwidXBsb2FkUGhvdG8iLCJmaWxlIiwicmVxIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJsaW5rIiwibWFrZUFjdGl2ZSIsImVsIiwiZ29OZXdFbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdvUmVzb2x2ZWRFbCIsImdvTm9uaXNzdWVFbCIsImFkZCIsInVwbG9hZFBob3RvRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2JpbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJjb250YWlucyIsInNob3dOYXYiLCJzdGF0dXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJ0YXJnZXQiLCJpIiwibGVuZ3RoIiwidHlwZSIsIm1hdGNoIiwiYWxlcnQiLCJ0b2dnbGVOYXYiLCJhIiwidGVzdCIsInN1YnN0ciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIndpbmRvdyIsIm9wZXJhIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUNBLFlBRUFBLFNBQUFDLE9BQUEsT0FDQSxXQUNBLGVBQ0EsWUFDQSxVQUNBLGtCQ1JBRCxRQUFBQyxPQUFBLG1CQUNBQyxTQUFBLGNBQUEsb0NDREEsV0FDQSxZQVNBLFNBQUFDLEdBQUFDLEVBQUFDLEVBQUFDLEdBU0EsUUFBQUMsR0FBQUMsR0FDQUosRUFBQUssSUFBQUosRUFBQSxpQkFDQUssUUFBQSxTQUFBQyxHQUNBSCxFQUFBRyxLQUVBQyxNQUFBLFNBQUFBLEdBQ0FDLFFBQUFDLElBQUEsK0JBQUFGLEtBSUEsUUFBQUcsR0FBQUMsRUFBQVIsR0FDQUssUUFBQUMsSUFBQUUsR0FDQVosR0FDQWEsT0FBQSxPQUNBQyxJQUFBYixFQUFBLGFBQ0FjLFNBQ0FDLDhCQUFBLElBQ0FDLGVBQUEscUNBRUFWLEtBQUFLLElBQ0FOLFFBQUEsU0FBQVksR0FDQVQsUUFBQUMsSUFBQSwrQkFFQUYsTUFBQSxTQUFBQSxHQUNBQyxRQUFBQyxJQUFBLDZCQUFBRixLQWhDQSxHQUFBVyxJQUNBaEIsWUFBQUEsRUFDQVEsVUFBQUEsRUFFQSxPQUFBUSxHQVpBdkIsUUFDQUMsT0FBQSxPQUNBdUIsUUFBQSxrQkFBQXJCLEdBRUFBLEVBQUFzQixTQUFBLFFBQUEsY0FBQSxpQkNQQXpCLFFBQUFDLE9BQUEsT0FBQXlCLFFBQUEsaUJBQUEsU0FBQUMsR0FDQUEsRUFFQUMsS0FBQSxLQUNBQyxZQUFBLFlBQ0FDLFdBQUEsbUJBRUFDLFdBQ0FDLFdBQUEsU0FLQWhDLFFBQUFDLE9BQUEsT0FBQXlCLFFBQUEsZ0JBQUEsU0FBQU8sR0FDQUEsRUFBQUMsU0FBQUMsWUFBQSxRQUNBRixHQUFBQyxTQUFBZixRQUFBaUIsT0FBQSx1QkNmQSxXQUNBLFlBUUEsU0FBQUMsR0FBQWpDLEVBQUFELEVBQUFtQyxFQUFBaEMsR0FnRUEsUUFBQWlDLEtBQ0FDLElBQ0FyQyxFQUFBSSxZQUFBLFNBQUFrQyxHQUNBSCxFQUFBSSxpQkFBQUQsSUFJQSxRQUFBRCxLQUNBcEMsRUFBQUssSUFBQSxhQUFBQyxRQUFBLFNBQUFDLEdBQ0EyQixFQUFBSyxLQUFBaEMsSUFDQUMsTUFBQSxTQUFBQSxHQUNBQyxRQUFBQyxJQUFBLDhCQUlBLFFBQUE4QixHQUFBQyxHQUNBLEdBQUFDLElBQ0E3QixPQUFBLE9BQ0FDLElBQUEsZ0NBQ0FDLFNBQ0E0QixjQUFBLDRCQUNBMUIsZUFBQSxxQ0FFQVYsS0FBQWtDLEVBR0F6QyxHQUFBMEMsR0FBQUUsS0FBQSxTQUFBaEMsR0FDQUgsUUFBQUMsSUFBQUUsRUFBQUwsS0FBQUEsS0FBQXNDLE1BQ0E5QyxFQUFBWSxVQUFBQyxFQUFBTCxLQUFBQSxLQUFBc0MsS0FBQSxlQUNBLFNBQUFqQyxHQUNBSCxRQUFBQyxJQUFBRSxLQUlBLFFBQUFrQyxHQUFBQyxHQUNBQyxFQUFBQyxVQUFBQyxPQUFBLFVBQ0FDLEVBQUFGLFVBQUFDLE9BQUEsVUFDQUUsRUFBQUgsVUFBQUMsT0FBQSxVQUNBSCxFQUFBRSxVQUFBSSxJQUFBLFVBcEdBLEdBQUFDLEdBQUFDLFNBQUFDLGNBQUEseUJBQ0FSLEVBQUFPLFNBQUFDLGNBQUEsa0JBQ0FMLEVBQUFJLFNBQUFDLGNBQUEsdUJBQ0FKLEVBQUFHLFNBQUFDLGNBQUEsc0JBSUF0RCxHQUFBdUQsT0FBQUYsU0FBQUcsZ0JBQUFULFVBQUFVLFNBQUEsVUFDQXpCLEVBQUEwQixTQUFBMUQsRUFBQXVELE9BQ0F2QixFQUFBMkIsT0FBQSxNQUdBUCxFQUFBUSxpQkFBQSxTQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLGdCQUdBLEtBQUEsR0FGQUMsR0FBQUYsRUFBQUcsT0FBQUQsTUFFQUUsRUFBQSxFQUFBQSxFQUFBRixFQUFBRyxPQUFBRCxJQUFBLENBQ0EsR0FBQTFCLEdBQUF3QixFQUFBRSxFQUVBLEtBQUExQixFQUFBNEIsS0FBQUMsTUFBQSxXQUdBLE1BQUFDLE9BQUEsNEJBRkEvQixHQUFBQyxNQU9BTyxFQUFBYyxpQkFBQSxRQUFBLFNBQUFDLEdBQ0FmLEVBQUFDLFVBQUFVLFNBQUEsV0FDQWIsRUFBQUUsS0FJQUcsRUFBQVcsaUJBQUEsUUFBQSxTQUFBQyxHQUNBWixFQUFBRixVQUFBVSxTQUFBLFdBQ0FiLEVBQUFLLEtBSUFDLEVBQUFVLGlCQUFBLFFBQUEsU0FBQUMsR0FDQVgsRUFBQUgsVUFBQVUsU0FBQSxXQUNBYixFQUFBTSxLQWlCQU4sRUFBQUUsR0FDQWIsSUE2Q0FELEVBQUFzQyxVQUFBLFdBQ0F0QyxFQUFBMEIsU0FBQTFCLEVBQUEwQixTQWpIQWhFLFFBQ0FDLE9BQUEsT0FDQTZCLFdBQUEsaUJBQUFPLEdBRUFBLEVBQUFaLFNBQUEsUUFBQSxrQkFBQSxTQUFBLGlCQ1BBLFNBQUFvRCxJQUFBLDJUQUFBQyxLQUFBRCxJQUFBLDBrREFBQUMsS0FBQUQsRUFBQUUsT0FBQSxFQUFBLE1BQUFwQixTQUFBRyxnQkFBQVQsVUFBQUksSUFBQSxXQUFBdUIsVUFBQUMsV0FBQUQsVUFBQUUsUUFBQUMsT0FBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuICAgICAgICAnZmlyZWJhc2UnLFxuICAgICAgICAnbXlBcHAuY29uZmlnJyxcbiAgICAgICAgJ25nQW5pbWF0ZScsXG4gICAgICAgICduZ1JvdXRlJyxcbiAgICAgICAgJ3ZBY2NvcmRpb24nXG4gICAgXSlcblxufSkoKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdteUFwcC5jb25maWcnLCBbXSlcbi5jb25zdGFudCgnZGF0YWJhc2VVcmwnLCBcImh0dHBzOi8vY2FtYWJpc2FwcC5oZXJva3VhcHAuY29tXCIpO1xuXG5cbiIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZmFjdG9yeSgnRGF0YWJhc2VGYWN0b3J5JywgRGF0YWJhc2VGYWN0b3J5KTtcblxuICBEYXRhYmFzZUZhY3RvcnkuJGluamVjdCA9IFsnJGh0dHAnLCAnZGF0YWJhc2VVcmwnLCAnJHJvb3RTY29wZSddO1xuXG4gIC8qIEBuZ0luamVjdCAqL1xuICBmdW5jdGlvbiBEYXRhYmFzZUZhY3RvcnkoJGh0dHAsIGRhdGFiYXNlVXJsLCAkcm9vdFNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICAgIGdldENvbmNlcm5zOiBnZXRDb25jZXJucyxcbiAgICAgICAgcG9zdFBob3RvOiBwb3N0UGhvdG9cbiAgICB9O1xuICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgLy8vLy8vLy8gZnVuY3Rpb24gZGVmaW5pdGlvbnMgLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldENvbmNlcm5zKGNhbGxiYWNrKSB7XG4gICAgICAkaHR0cC5nZXQoZGF0YWJhc2VVcmwgKyAnL2FwaS9jb25jZXJucycpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpZG4ndCBnZXQgY29uY2VybnMgcHJvcGVybHlcIiArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zdFBob3RvKHJlcywgY2FsbGJhY2spIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAkaHR0cCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6IGRhdGFiYXNlVXJsICsgJy9hcGkvcGhvdG8nLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogcmVzXG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU3VjZXNzZnVsbHkgcG9zdGVkIHBob3RvLicpO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJEaWRuJ3QgcG9zdCBwaG90byBwcm9wZXJseVwiICsgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBwb3N0U3RhdHVzQ2hhbmdlKGNvbmNlcm5faWQsIHN0YXR1cykge1xuICAgIC8vICAgICAkaHR0cC5wb3N0KGRhdGFiYXNlVXJsICsgJy9jb25jZXJucy5qc29uLycgKyBjb25jZXJuX2lkICsgJy9zdGF0dXMvJyArIHN0YXR1cykuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnY29uY2VybiBwb3N0ZWQhJyk7XG4gICAgLy8gICAgIH0pLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIC8vICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOicpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICB9XG5cbn0pKCk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuXG4gICAgICAgIC53aGVuKCcvJywge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJ1xuICAgICAgICB9KVxuICAgICAgICAub3RoZXJ3aXNlKHtcbiAgICAgICAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgICAgICB9KTtcblxufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsIGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy51c2VYRG9tYWluID0gdHJ1ZTtcbiAgICBkZWxldGUgJGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddO1xuICAgIC8vICRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0XG59XSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpO1xuXG4gICAgSG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGh0dHAnLCAnRGF0YWJhc2VGYWN0b3J5JywgJyRzY29wZScsICckcm9vdFNjb3BlJ107XG5cbiAgICBmdW5jdGlvbiBIb21lQ29udHJvbGxlcigkaHR0cCwgRGF0YWJhc2VGYWN0b3J5LCAkc2NvcGUsICRyb290U2NvcGUpIHtcbiAgICAgICAgLyogRWxlbWVudCBzZWxlY3RvcnMgYW5kIHNjb3BlIHZhcmlhYmxlcyAqL1xuICAgICAgICB2YXIgdXBsb2FkUGhvdG9FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0ndXBsb2FkLXBob3RvJ11cIiksXG4gICAgICAgICAgICBnb05ld0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltyb2xlPSdnb05ldyddXCIpLFxuICAgICAgICAgICAgZ29SZXNvbHZlZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltyb2xlPSdnb1Jlc29sdmVkJ11cIiksXG4gICAgICAgICAgICBnb05vbmlzc3VlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3JvbGU9J2dvTm9uaXNzdWUnXVwiKTtcbiAgICAgICAgICAgIC8vIHJlc29sdmVDb25jZXJuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3JvbGU9J3Jlc29sdmVDb25jZXJuJ11cIiksXG4gICAgICAgICAgICAvLyBub25pc3N1ZUNvbmNlcm5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbcm9sZT0nbm9uaXNzdWVDb25jZXJuJ11cIik7XG5cbiAgICAgICAgJHJvb3RTY29wZS5tb2JpbGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2JpbGUnKTtcbiAgICAgICAgJHNjb3BlLnNob3dOYXYgPSAkcm9vdFNjb3BlLm1vYmlsZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgJHNjb3BlLnN0YXR1cyA9ICduZXcnO1xuXG4gICAgICAgIC8qIEV2ZW50IExpc3RlbmVycyAqL1xuICAgICAgICB1cGxvYWRQaG90b0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gZmlsZXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlsZS50eXBlLm1hdGNoKC9pbWFnZS4qLykpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkUGhvdG8oZmlsZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiT25seSBpbWFnZXMgYXJlIGFjY2VwdGVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvTmV3RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCFnb05ld0VsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBtYWtlQWN0aXZlKGdvTmV3RWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBnb1Jlc29sdmVkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCFnb1Jlc29sdmVkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG1ha2VBY3RpdmUoZ29SZXNvbHZlZEVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29Ob25pc3N1ZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICghZ29Ob25pc3N1ZUVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBtYWtlQWN0aXZlKGdvTm9uaXNzdWVFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlc29sdmVDb25jZXJuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzb2x2ZSB0aGlzP1wiKSkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzb2x2ZWRcIik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIG5vbmlzc3VlQ29uY2VybkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHRoaXMgaXNuJ3QgYW4gaXNzdWU/XCIpKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJNYXJrIG5vbi1pc3N1ZVwiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLyogSW5pdGlhdGUgKi9cbiAgICAgICAgbWFrZUFjdGl2ZShnb05ld0VsKTtcbiAgICAgICAgYWN0aXZhdGUoKTtcblxuICAgICAgICAvKiBGdW5jdGlvbiBEZWZpbml0aW9ucyAqL1xuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgICAgIGdldEptYXAoKTtcbiAgICAgICAgICAgIERhdGFiYXNlRmFjdG9yeS5nZXRDb25jZXJucyhmdW5jdGlvbiAoY29uY2VybnMpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29uY2VybkNvbnRhaW5lciA9IGNvbmNlcm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRKbWFwKCkge1xuICAgICAgICAgICAgJGh0dHAuZ2V0KCdqbWFwLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmptYXAgPSBkYXRhO1xuICAgICAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWRuJ3QgZ2V0IGptYXAgcHJvcGVybHlcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwbG9hZFBob3RvKGZpbGUpIHtcbiAgICAgICAgICAgIHZhciByZXEgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvaW1hZ2UnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQ2xpZW50LUlEIGE4M2I4ZDQ4NDg4NjkzOCcsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YTogZmlsZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkaHR0cChyZXEpLnRoZW4oZnVuY3Rpb24gc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YS5saW5rKTtcbiAgICAgICAgICAgICAgICBEYXRhYmFzZUZhY3RvcnkucG9zdFBob3RvKHJlcy5kYXRhLmRhdGEubGluaywgZnVuY3Rpb24oKXt9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVyciAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZUFjdGl2ZShlbCkge1xuICAgICAgICAgICAgZ29OZXdFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGdvUmVzb2x2ZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGdvTm9uaXNzdWVFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2NvcGUgRnVuY3Rpb25zICovXG4gICAgICAgICRzY29wZS50b2dnbGVOYXYgPSBmdW5jdGlvbiAoKSAge1xuICAgICAgICAgICAgJHNjb3BlLnNob3dOYXYgPSAhJHNjb3BlLnNob3dOYXY7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIil9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
