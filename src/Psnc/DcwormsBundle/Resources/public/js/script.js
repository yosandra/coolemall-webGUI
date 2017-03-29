
(function ($) {
    var deleteItem = function () {
        $(this).parent().remove();
    };

    function td(text) {
        var td = $('<td></td>');
        td.text(text);
        return td;
    }

    function tdPercentageLoad(){
        var td = $('<td></td>');
        var select = $('#select01').clone();
        select.find('option').remove();
        for(var i = 0; i <= 100; i=i+5){
            var opt = $('<option></option>',{
                text: ""+i
            });
            select.append(opt);
        }
        td.append(select);
        return td;
    }

    function percentageLoad(element){
        var select = element;
        select.find('option').remove();
        for(var i = 0; i <= 100; i=i+5){
            var opt = $('<option></option>',{
                text: ""+i
            });
            select.append(opt);
        }

        return select;
    }

    $(document).ready(function () {
        $('#add-profile-btn').click(function () {

            var input = $('#select01');
            var deleteBtn = $('<a href="#" class="btn btn-primary">Delete</a>');
            var tr = $('<tr></tr>');
            tr.append(td(input.find(":selected").text()));
            tr.append(tdPercentageLoad());
            var del = td('');
            del.append(deleteBtn);
            deleteBtn.click(function () {
                $(this).parent().parent().remove();
                return false;
            });
            tr.append(del);
            $('#profiles tr:last').after(tr);
            return false;
        });

        percentageLoad($('#workload-load'));

        $('#myTab a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
    });

})(window.jQuery);