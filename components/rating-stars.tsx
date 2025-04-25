import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const RatingStars = ({ rating, showValue = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name="star"
            size={20}
            color={i < Math.round(rating) ? '#FACC15' : '#D1D5DB'}
            style={{ marginRight: 4 }}
          />
        ))}
      </View>
      {showValue && <Text style={styles.ratingText}>({rating.toFixed(1)})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#6B7280',
  },
});