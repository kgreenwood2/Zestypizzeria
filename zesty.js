$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);
        $("input").change(orderPizza);



        // other functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }




        function orderPizza() {

            var checkedBoxes = $("input[name=meatTopping]:checked");
            var numSelected = checkedBoxes.length;
            $("#quantity").text(numSelected);








            var checkedBoxes = $("input[name=topping]:checked");
            var numSelected2 = checkedBoxes.length;
            $("#quantity2").text(numSelected2);

            var orderTotal =  $("input[name=topping]:checked");
            var productSummary = "";



            var subtotal = 0;

            checkedBoxes.each(function() {
                // add the price to the total variable
                subtotal += $(this).data("price");
                // concatenate the value attribute to the string variable
                productSummary += $(this).val();
                productSummary += " ";


                var selectedButton = $("input[name=size]:checked");

                var size = selectedButton.data("size");







                $("#summary").text(productSummary);
                $("#size").text(size.toFixed(2));
                $("#grandTotal").text(orderTotal.toFixed(2));



            });



        }



            // read all the values



            // do calculations

            // output on tab 3






    });