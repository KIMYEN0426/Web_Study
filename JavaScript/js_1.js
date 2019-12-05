<script>
    var number = {1,2,3,4,5};
    
</script>
function sum(number) {
    var sum=0, num =0;
    for(var i =0;i<number.length; i++){
        if(number[i]%2==0) sum+=number[i];
        else num+=number[i];
    }
    document.write(sum+"  ");
    document.write(num);
}


