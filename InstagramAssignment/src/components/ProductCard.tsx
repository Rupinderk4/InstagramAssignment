import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  price: number;
  rating: number;
  image: string;
};

const ProductCard = ({ name, price, rating, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>{rating} ★</Text>
      </View>

      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 10,
    backgroundColor: "#E5E7EB",
  },
  info: { flex: 1 },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111827",
  },
  rating: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#166534",
  },
});