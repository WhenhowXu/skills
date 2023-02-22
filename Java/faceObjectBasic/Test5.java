// 多态是指，针对某个类型的方法调用，其真正执行的方法取决于运行时期实际类型的方法
class Income {
    protected double income;
    public Income(int i) {
        this.income = i;
    }
    public double getTax(){
        return income * 0.1;
    }
}
class Salary extends Income {
    public Salary(int i) {
        super(i);
    }

    @Override
    public double getTax(){
        if(income <= 5000){
            return 0;
        }
        return (income - 5000)* 0.2;
    }
}

class StateCouncilSpecialAllowance extends Income {
    public StateCouncilSpecialAllowance(int i) {
        super(i);
    }

    @Override
    public double getTax(){
        return 0;
    }
}

public class Test5 {
    public static void main(String[] args){
        Income[] incomes = new Income[]{
            new Income(3000),
            new Salary(7500),
            new StateCouncilSpecialAllowance(15000)
        };
        System.out.println(totalTax(incomes));
    }
    public static double totalTax(Income... incomes){
        double total = 0;
        for(Income income: incomes){
            total = total + income.getTax();
        }
        return total;
    }
}