import { StyleSheet, Text, View } from "react-native";
import { useRoute, RouteProp } from '@react-navigation/native'


type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;

  }
}

type OrderRoutesProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order() {
  const route = useRoute<OrderRoutesProps>();
  return (
    <View style={styles.container}>
      <Text>Tela order</Text>

    </View>
  )
}


const styles = StyleSheet.create({

  container: {

  }
})