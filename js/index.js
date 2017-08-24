$(function(){
	var foodSystem = {
		init: function(){
			this.foodName = $('.food-name');
			this.foodPrice = $('.food-price');
			this.foodAmount = $('.food-amount');
			this.tbody = $('table tbody');

			this.addClick();
			this.trRemove();
			this.selectAll();
		},
		//点击录入
		addClick: function(){
			var that = this;
			$('.add').click(function(){
				//生成一个tr
				var tr = '<tr>';
				tr += '<td><input type="checkbox" class="select" /></td>';
				tr += '<td>' + that.foodName.val() + '</td>';
				tr += '<td>' + that.foodPrice.val() + '</td>';
				tr += '<td>' + that.foodAmount.val() + '</td>';
				tr += '<td class="remove">删除</td>';
				tr+="</tr>";
				//往tbody中追加tr
				that.tbody.append(tr);
				//新添加tr时，将【全选按钮】的状态改为false
				$('.select-all').prop('checked',false);
			});
		},
		trRemove: function(){
			/*
				怎么给未来元素绑定事件？
				利用事件委托机制，原理是；利用事件冒泡
			*/
			// this.tbody.click(function(e){
			// 	if( $(e.target).is('td.remove') ){
			// 		alert(1);
			// 	}
			// });

			/*
				on(type,[selector],fn) 事件绑定
				1、普通事件绑定（给自己添加事件）
				2、[seletor] 选取子元素 
					利用事件冒泡机制给 子元素绑定事件（事件委托）
					给未来元素绑定事件
				
				$('p').remove()  删除p元素
			*/
			this.tbody.on('click','td.remove',function(e){
				//这里的this指的是你点击的那个删除元素  <td class="remove">删除</td>
				//console.log(this)
				console.log(e.type)
				console.log(e.target)
				$(this).parent().remove();
			});



		},
		selectAll: function(){
			var that = this;
			$('.select-all').on('click',function(){
				//怎么判断全选按钮是否被选中？   =》 通过checked属性的值
				//怎么获取checked属性的值？  attr方法
				//console.log($(this).attr('checked'));
				//console.log($(this).prop('checked'));
				if($(this).prop('checked')){
					that.tbody.find('input[type="checkbox"]').prop('checked',true);
				}else{
					that.tbody.find('input[type="checkbox"]').prop('checked',false);
				}
			});
		}
	};
	foodSystem.init();
});