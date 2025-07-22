# SpringBoot

# @Transactional

在 Java Spring Boot 开发中，`@Transactional`​ 是用于**声明事务边界**的注解，通常应用在数据库操作中以确保数据的一致性和完整性。

## 一、需要使用 `@Transactional`​ 的场景

### 1. **多步数据库操作需原子性**

当一个业务方法中包含多个数据库操作，这些操作必须**全部成功或全部失败**时，需要用 `@Transactional`​ 保证操作的原子性。

```java
@Transactional
public void transferMoney(Long fromAccountId, Long toAccountId, BigDecimal amount) {
    accountRepository.decreaseBalance(fromAccountId, amount);
    accountRepository.increaseBalance(toAccountId, amount);
}
```

### 2. **数据库操作之间存在依赖**

比如先插入一条记录，再用该记录的 ID 插入另一条记录，如果前者失败，后者也必须回滚。

### 3. **批量操作时**

例如批量导入数据，任何一条失败都应导致整体回滚。

## 二、不需要使用的情况

- **单一的读操作（查询）**   
  如果只是查询，不涉及数据更改，不需要 `@Transactional`​。
- **没有数据库操作的服务层方法**  
  方法里如果不调用任何持久化操作，事务是多余的。

## 三、使用时的注意事项

### 1. **只能用于 Spring 管理的 Bean**

​`@Transactional`​ 只有在 Spring 容器管理的类中才会生效（通常是 `@Service`​、`@Component`​ 注解的类）。

### 2. **避免在** **​`private`​**​ **方法上使用**

因为 Spring 的事务代理是基于 AOP 的，调用 `private`​ 方法不会被代理，事务无效。

### 3. **内部方法调用不会触发事务**

同一个类中，一个方法调用另一个加了 `@Transactional`​ 的方法，事务不会生效。解决方法是将目标方法提取到另一个 Bean 中。

### 4. **异常捕获会导致事务失效**

只有**运行时异常**（`RuntimeException`​）才会触发回滚。你如果手动 try-catch 异常并吞掉了它，事务不会回滚，除非显式调用 `TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();`​

## 四、控制事务行为的参数（进阶）

```java
@Transactional(
    propagation = Propagation.REQUIRED,
    isolation = Isolation.READ_COMMITTED,
    rollbackFor = Exception.class
)
```

这些参数可以控制：

- **传播行为（propagation）** ：事务嵌套时的行为
- **隔离级别（isolation）** ：解决并发访问时的数据一致性问题
- **回滚规则（rollbackFor）** ：哪些异常会触发回滚

# IoC

‍

# AOP
