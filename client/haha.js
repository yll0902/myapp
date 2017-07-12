Template.haha.events({
    'click [name=submit]': function(e, tmpl){
        var title=$('[name=title]').val();
        var num=$('[name=num]').val();
        var count=$('[name=count]').val();
        var content=$('[name=content]').val();

        var obj={
            '제목':title,
            '글번호': num,
            '조회수': count,
            '내용': content
        }



        // 1.입력이라면
        if( $('[name=hidden_id]').val().length<=0){
            console.log(obj);
            CollectionBoard.insert(obj);

            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');

            // 2.수정이라면

        }else {

            CollectionBoard.update($('[name=hidden_id]').val(), {$set: obj});

            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');

        }

    },

    'click [name=deleteBoard]': function(element,tmpl){
        var id=$(element.target).attr('id');
        CollectionBoard.remove({_id: id});
        //console.log('삭제하시겠습니까?');
    },
    'click [name=updateBoard]': function(e, tmpl){
        console.log('수정버튼을 눌렀습니다');
        $('#myModal-div').modal('show');
        console.log(this._id);
        console.log(this.글번호);
        console.log(this.조회수);
        console.log(this.제목); 
        console.log(this.내용);        
        $('[name=hidden_id]').val(this._id);
        $('[name=num]').val(this.글번호);
        $('[name=count]').val(this.조회수);
        $('[name=title]').val(this.제목); 
        $('[name=content]').val(this.내용);
    }
});

Template.haha.helpers({
    list:function(){

        var result=CollectionBoard.find().fetch()
        console.log(result)
        //        var result=[
        //            {
        //                '글번호': 1,
        //                '제목':"서울여자대학교",
        //                '조회수': 15
        //            },
        //            {
        //                '글번호': 2,
        //                '제목':"서울여자대학교 구루2",
        //                '조회수': 15
        //            },
        //            {
        //                '글번호': 3,
        //                '제목':"제목대목 게임 제목",
        //                '조회수': 15
        //            },
        //            {
        //                '글번호': 4,
        //                '제목':"번호번호 글 번호",
        //                '조회수': 15
        //            }
        //
        //        ]
        return result
    }
});