### TL; DR

* 재귀 증명은 메인넷에서 실행되며 단일 증명으로 StarkEx 앱과 StarkNet을 확장합니다.
* 규모를 늘리고 비용 및 대기 시간 측면에서 이점을 제공합니다(규모와 대기 시간이 함께 움직이고 절충되지 않는 드물고 흥미로운 현상).
* L3 및 기타 이점을 위한 단계를 설정합니다.[재귀 증명](https://medium.com/@starkware/recursive-starks-78f8dd401025)에 대한 블로그 게시물을 읽어보십시오. 멋진 자료에요 😉

### 확장!

카이로의 일반 계산으로 구동되는 재귀 증명이 현재 생산 중입니다. 이것은 STARKs로 L2 스케일링의 힘을 크게 향상시킵니다. 단일 증명을 통해 이더리움에 기록할 수 있는 거래 수를 여러 배로 빠르게 늘릴 것입니다.

지금까지 STARK 스케일링은 수만 또는 수십만 건의 트랜잭션을 이더리움에 작성된 단일 증명으로 "롤업"하는 방식으로 작동했습니다. 재귀를 사용하면 이러한 많은 증명을 단일 증명으로 "롤업"할 수 있습니다.

이 방법은 현재 수많은 Cairo 기반 응용 프로그램(StarkEx, StarkWare의 SaaS 스케일링 엔진, StarkNet, 무허가 롤업)에서 실행되는 응용 프로그램을 위해 생산되고 있습니다.

### 지금까지의 이야기

2020년 3월 메인넷에 대한 첫 번째 증명 이후 다음과 같은 개발이 STARK 사용 방식을 형성했습니다.

### STARK 기반 스케일링

2020년 6월에 최초의 STARK 기반 스케일링 솔루션인[StarkEx](https://youtu.be/P-qoPVoneQA)이더리움 메인넷에 배포되었습니다. StarkEx에는 오프체인에서 대규모 계산을 수행하고 정확성에 대한 STARK 증명을 생성하는 Prover와 이 증명을 온체인에서 검증하는 Verifier가 있습니다. 이 첫 번째 배포에 대한 제약 조건은 StarkWare의 엔지니어가 "손으로 작성"했기 때문에 StarkEx의 기능 속도가 크게 제한되었습니다. 우리는 일반적인 계산을 지원하는 프로그래밍 언어인 Cairo가 필요하다는 결론을 내렸습니다.

#### 카이로

2020년 여름 카이로</a>



처음 등장했습니다. Cairo는 CPU Algebraic Intermediate Representation(AIR)의 약자이며 이 "CPU"의 명령 집합을 확인하는 단일 AIR를 포함합니다. 그것은 더 복잡한 비즈니스 논리, 임의의 계산문, 그리고 더 빠르고 안전한 방식으로 증명을 코딩할 수 있는 문을 열었습니다. Cairo 프로그램은 단일 응용 프로그램 논리의 실행을 증명할 수 있습니다. 그러나 Cairo 프로그램은 SHARP와 같은 여러 응용 프로그램을 연결한 것일 수도 있습니다.</p> 



#### 날카로운

SHARd Prover인 SHARP는 여러 개별 앱에서 트랜잭션을 가져오고 하나의 STARK 증명으로 모두 증명합니다. 앱은 트랜잭션 배치를 결합하여 STARK 증명 용량을 더 빠르게 채웁니다. 트랜잭션은 향상된 속도와 대기 시간으로 처리됩니다. 다음 프론티어: 재귀 증명, 그러나 일부 하드 코딩된 논리뿐만 아니라 일반적인 계산****위한 것입니다.

재귀적 증명의 모든 이점을 이해하려면 지금까지 SHARP에서 (비재귀적) 증명이 수행된 방법에 대해 조금 더 이해하는 것이 좋습니다. 그림 1은 일반적인 비재귀적 흐름을 보여줍니다.

![그림 1: 일반적인 비재귀 증명 흐름](/assets/recursive_starks_01.png "그림 1: 일반적인 비재귀 증명 흐름")

여기에서 진술은 시간이 지남에 따라 도착합니다. 특정 용량(또는 시간) 임계값에 도달하면 결합된 큰 명령문(일명 Train)이 생성됩니다. 이 결합된 진술은 모든 개별 진술이 수신된 후에만 입증됩니다. 이 증명은 증명하는 데 오랜 시간이 걸립니다(대략 각 진술을 개별적으로 증명하는 데 걸리는 시간의 합).

매우 큰 명령문을 증명하는 것은 결국 메모리와 같은 사용 가능한 컴퓨팅 리소스에 의해 제한됩니다. 재귀 이전에는 이것이 사실상 STARK 증명의 확장성을 제한하는 장벽이었습니다.



### 재귀 증명이란 무엇입니까?

STARK 증명을 사용하면 명령문을 증명하는 데 걸리는 시간은 명령문을 실행하는 데 걸리는 시간과 거의 선형입니다. 또한 진술을 증명하는 데 T 시간이 걸리면 증명을 확인하는 데 대략 log(T) 시간이 걸리며 이를 일반적으로 "로그 압축"이라고 합니다. 즉, STARK를 사용하면 진술을 계산하는 것보다 진술을 확인하는 데 훨씬 적은 시간을 할애합니다.

[카이로](https://starkware.co/cairo/)STARK 증명으로 입증되고 해당 STARK 검증기로 검증될 수 있는 일반적인 계산 진술을 표현할 수 있습니다.

여기에서[재귀](https://en.wikipedia.org/wiki/Recursion)수행할 수 있는 기회가 시작됩니다. 수천 건의 트랜잭션의 정확성을 증명하는 카이로 프로그램을 작성하는 것과 같은 방식으로 여러 STARK 증명을 확인하는 카이로 프로그램을 작성할 수도 있습니다. 여러 "업스트림" 증명의 유효성을 증명하는 단일 증명을 생성할 수 있습니다. 이것이 우리가 재귀 증명이라고 부르는 것입니다.

대수 압축과 대략 선형 증명 시간으로 인해 STARK 증명의 검증을 증명하는 데 상대적으로 짧은 시간이 걸립니다(가까운 미래에 몇 분 정도 소요될 것으로 예상됨).

재귀를 구현할 때 SHARP는 도착 시 진술을 증명할 수 있습니다. 그들의 증명은 특정 지점에서 결과 증명이 온체인 검증자 계약에 제출될 때까지 다양한 패턴의 재귀 증명으로 계속해서 병합될 수 있습니다. 그림 2에는 일반적인 패턴이 나와 있습니다.

![그림 2: 전형적인 재귀 증명 흐름.](/assets/recursive_starks_02.png "그림 2: 전형적인 재귀 증명 흐름.")



### 재귀 증명의 즉각적인 이점



#### 온체인 비용 감소

즉시, 우리는 여러 증명을 하나로 "압축"하여 거래당 온체인 검증 비용을 낮춥니다(각 진술에는 많은 거래가 포함될 수 있음).

재귀를 사용하면 지금까지 증명 크기를 제한했던 계산 리소스 장벽(예: 메모리)이 제거됩니다. 각 제한된 크기 문을 개별적으로 증명할 수 있기 때문입니다. 따라서 재귀를 사용할 때 재귀의 효과적인 Train 크기는 거의 무제한이며 트랜잭션당 비용을 몇 배나 줄일 수 있습니다.

실질적으로 감소는 허용 가능한 대기 시간(및 트랜잭션 도착 속도)에 따라 달라집니다. 또한 각 증명에는 일반적으로 온체인 데이터와 같은 일부 출력도 수반되기 때문에 단일 증명과 함께 온체인에 작성할 수 있는 데이터의 양에는 제한이 있습니다. 그럼에도 불구하고 비용을 10배 이상 절감하는 것은 쉽게 달성할 수 있습니다.



#### 대기 시간 감소

재귀적 증명 패턴은 대규모 명령문을 증명하는 대기 시간을 줄입니다. 이것은 두 가지 요인의 결과입니다.

1. 들어오는 문은 병렬</strong>에서**으로 증명될 수 있습니다(매우 큰 결합된 문을 증명하는 것과 반대).</li> 
   
   2 증명을 시작하기 위해 Train의 마지막 문장이 도착할 때까지 기다릴 필요가 없습니다. 오히려, 증명은 도착하는 대로 새로운 진술과 결합될 수 있습니다. 즉, Train에 합류하는 마지막 문장의 대기 시간은 거의 마지막 문장을 증명하는 데 걸리는 시간과 재귀 검증자 문장을 증명하는 데 걸리는 시간을 더한 것입니다(이것은 이미 이것을 "온보딩"한 모든 문장을 증명합니다). 특정 기차).</ol> 

우리는 재귀 검증자 진술을 증명하는 대기 시간을 적극적으로 개발하고 최적화하고 있습니다. 우리는 이것이 몇 달 안에 몇 분 정도에 도달할 것으로 예상합니다. 따라서 매우 효율적인 SHARP는 트랜잭션당 온체인 비용과 트레이드 오프에 따라 몇 분에서 몇 시간까지 대기 시간을 제공할 수 있습니다. 이는 SHARP의 대기 시간이 의미 있게 개선되었음을 나타냅니다.



#### L3 촉진

카이로의 재귀 검증자 진술의 개발은 또한 StarkNet 스마트 계약으로 구울 수 있기 때문에 StarkNet에 증명을 제출할 가능성을 열어줍니다. 이를 통해 공용 StarkNet</a>(L2 네트워크) 위에L3 배포를 구축할 수 있습니다.</p> 

재귀 패턴은 L3의 증명 집계에도 적용되며 L2의 단일 증명으로 검증됩니다. 따라서 거기에서도 하이퍼 스케일링이 달성됩니다.



### 더 미묘한 이점



#### 적용 재귀

재귀는 비용과 성능을 더욱 확장하고자 하는 플랫폼과 애플리케이션에 더 많은 기회를 열어줍니다.

각 STARK 증명은 "공개 입력"(또는 카이로 용어로 "프로그램 출력")으로 알려진 일부 입력에 적용된 진술의 유효성을 증명합니다. 개념적으로 STARK 재귀는*2*입력이 있는 2개의 증명을 2개의 입력이 있는**증명으로 압축합니다. 즉, 증명의 수는 줄어들지만 입력의 수는 일정하게 유지됩니다. 그런 다음 이러한 입력은 일반적으로 L1의 일부 상태를 업데이트하기 위해(예: 상태 루트를 업데이트하거나 온체인 인출을 수행하기 위해) 애플리케이션에서 사용됩니다.

</em>문이*응용 프로그램 인식*, 즉 응용 프로그램 자체의 의미를 인식하도록 허용되면 두 증명을*압축할 수 있을 뿐만 아니라 두 입력을 하나로 결합할 수 있습니다. 결과 명령문은 애플리케이션 시맨틱을 기반으로 하는 입력 조합의 유효성을 증명하므로 Applicative Recursion이라는 이름이 지정됩니다(예를 들어 그림 3 참조).</p> 

![그림 3: 적용 재귀 예제](/assets/recursive_starks_03.png "그림 3: 적용 재귀 예제")

여기서 진술 1은 A에서 B로의 상태 업데이트를 증명하고 진술 2는 B에서 C로의 추가 업데이트를 증명합니다. 진술 1과 진술 2의 증명은 A에서 C로의 직접적인 업데이트를 증명하는 세 번째 진술로 결합될 수 있습니다. 유사한 논리를 재귀적으로 적용하면 최종 대기 시간 요구 사항까지 상태 업데이트 비용을 크게 줄일 수 있습니다.

응용 재귀의 또 다른 중요한 예는 여러 증명에서 롤업 데이터를 압축하는 것입니다. 예를 들어 StarkNet과 같은 Validity Rollup의 경우 데이터 가용성을 보장하기 위해 L2의 모든 스토리지 업데이트도 L1의 전송 데이터로 포함됩니다. 그러나 동일한 저장 요소에 대해 여러 업데이트를 보낼 필요가 없습니다. 검증된 증명에 의해 입증된 트랜잭션의 최종 값만 데이터 가용성에 필요하기 때문입니다. 이 최적화는 이미*단일*StarkNet 블록 내에서 수행됩니다. 그러나 Applicative Recursion은 블록당 증명을 생성하여*여러*L2 블록에 걸쳐 이 롤업 데이터를 압축할 수 있습니다. 이는 L1 업데이트의 확장성을 희생하지 않고 L2에서 더 짧은 블록 간격을 가능하게 하여 비용을 크게 절감할 수 있습니다.

주목할 가치가 있는: 적용 재귀는 앞에서 설명한 것처럼 응용 프로그램에 구애받지 않는 재귀와 결합될 수 있습니다. 이 두 가지 최적화는 독립적입니다.



#### 온체인 검증기 복잡성 감소

STARK 검증기의 복잡성은 검증하도록 설계된 진술의 종류에 따라 다릅니다. 특히 카이로 진술의 경우 검증기 복잡성은 카이로 언어에서 허용되는 특정 요소, 특히 지원되는 내장 기능에 따라 달라집니다(카이로에 대해 CPU 메타포를 사용하는 경우 내장 기능은 마이크로 -CPU의 회로: 자주 수행되는 계산으로 자체 최적화된 계산이 필요합니다.

카이로 언어는 계속해서 발전하고 점점 더 유용한 내장 기능을 제공합니다. 반면 재귀 검증기는 이러한 내장 기능 중 일부만 사용하면 됩니다. 따라서 재귀 SHARP는 재귀 검증기에서 전체 언어를 지원함으로써 카이로의 모든 진술을 성공적으로 지원할 수 있습니다. 특히, L1 Solidity Verifier는 재귀 증명만 확인하면 되므로 Cairo 언어의 보다 안정적인 하위 집합으로 제한될 수 있습니다. L1 Verifier는 최신 및 최고의 내장 기능을 따라갈 필요가 없습니다. 즉, 끊임없이 진화하는 복잡한 진술의 검증은 L2로 이관되며 L1 Verifier는 더 간단하고 안정적인 진술을 검증하게 됩니다.



#### 컴퓨팅 공간 감소

재귀 이전에는 여러 문을 하나의 증명으로 집계하는 기능이 사용 가능한 컴퓨팅 인스턴스에서 증명할 수 있는 문의 최대 크기(및 이러한 증명을 생성하는 데 걸리는 시간)로 제한되었습니다.

재귀를 사용하면 더 이상 이렇게 매우 큰 명령문을 증명할 필요가 없습니다. 결과적으로 더 작고 저렴하며 더 많은 컴퓨팅 인스턴스를 사용할 수 있습니다(대형 모놀리식 증명기보다 더 많은 인스턴스가 필요할 수 있음). 이를 통해 이전보다 더 많은 물리적 및 가상 환경에서 증명자 인스턴스를 배포할 수 있습니다.



### 요약

일반 계산의 재귀 증명은 이제 Mainnet Ethereum에서 StarkNet을 포함한 여러 생산 시스템에 서비스를 제공합니다.

재귀의 이점은 계속해서 새로운 개선을 허용하므로 점진적으로 실현될 것이며 곧 하이퍼스케일을 제공하고 가스 요금을 절감하며 병렬화의 잠재력을 잠금 해제하여 대기 시간을 개선할 것입니다.

L3 및 응용 재귀와 같은 새로운 기회와 함께 상당한 비용 및 대기 시간 이점을 가져올 것입니다. 재귀 검증기의 추가 최적화가 진행 중이며 시간이 지남에 따라 더 나은 성능과 비용 이점이 제공될 것으로 예상됩니다.

**Gidi Kaempfer**, StarkWare 코어 엔지니어링 책임자